"use client";
import { useEffect, useRef } from "react";

/**
 * NatureBg — full-canvas environment background.
 *
 * Renders:
 *   • Gradient sky (light / dark-mode aware)
 *   • Realistic fir-tree silhouettes in 3 depth layers (parallax on scroll)
 *   • Subtle ground-fog band at tree line
 *   • Ambient leaf particles that drift and fall
 *
 * Everything is drawn on a single <canvas> for consistency.
 * Static scene (sky + trees) is pre-drawn to an offscreen canvas
 * and blit each frame so only leaves are re-drawn live.
 */

/* ─── Tree configuration ─────────────────────────────────────────── */
/* x: viewport fraction, h: height in px at scale=1, scale, alpha   */
const TREES = [
  /* back layer — small, very faint */
  { x: 0.06, h: 140, scale: 0.70, alpha: 0.055, crownFrac: 0.52 },
  { x: 0.22, h: 120, scale: 0.60, alpha: 0.045, crownFrac: 0.55 },
  { x: 0.38, h: 150, scale: 0.65, alpha: 0.050, crownFrac: 0.50 },
  { x: 0.55, h: 130, scale: 0.60, alpha: 0.045, crownFrac: 0.53 },
  { x: 0.72, h: 140, scale: 0.68, alpha: 0.055, crownFrac: 0.52 },
  { x: 0.88, h: 125, scale: 0.62, alpha: 0.048, crownFrac: 0.54 },
  /* mid layer */
  { x: 0.02, h: 190, scale: 0.88, alpha: 0.090, crownFrac: 0.46 },
  { x: 0.16, h: 210, scale: 0.95, alpha: 0.100, crownFrac: 0.44 },
  { x: 0.32, h: 180, scale: 0.82, alpha: 0.085, crownFrac: 0.48 },
  { x: 0.50, h: 170, scale: 0.80, alpha: 0.082, crownFrac: 0.49 },
  { x: 0.68, h: 200, scale: 0.90, alpha: 0.092, crownFrac: 0.45 },
  { x: 0.84, h: 215, scale: 0.96, alpha: 0.102, crownFrac: 0.43 },
  { x: 0.98, h: 185, scale: 0.85, alpha: 0.088, crownFrac: 0.47 },
  /* front layer — larger, more visible */
  { x: 0.00, h: 260, scale: 1.20, alpha: 0.140, crownFrac: 0.40 },
  { x: 0.11, h: 290, scale: 1.35, alpha: 0.155, crownFrac: 0.38 },
  { x: 0.23, h: 245, scale: 1.10, alpha: 0.130, crownFrac: 0.42 },
  { x: 0.48, h: 220, scale: 1.00, alpha: 0.120, crownFrac: 0.44 },
  { x: 0.77, h: 250, scale: 1.12, alpha: 0.132, crownFrac: 0.41 },
  { x: 0.89, h: 295, scale: 1.38, alpha: 0.158, crownFrac: 0.37 },
  { x: 1.00, h: 265, scale: 1.22, alpha: 0.142, crownFrac: 0.39 },
];

const LEAF_COLORS = [
  "#15803d", "#166534", "#14532d", "#16a34a",
  "#065f46", "#1a5c38", "#0f6b35", "#22863a",
];

let _uid = 0;

/* ─── Draw one realistic fir tree ───────────────────────────────── */
function drawFirTree(ctx, cx, baseY, treeH, alpha, scrollY, dark) {
  const tiers   = 8;
  const maxW    = treeH * 0.40;
  const bodyH   = treeH * 0.82;
  const trunkH  = treeH * 0.18;
  const trunkW  = Math.max(4, treeH * 0.038);

  ctx.save();
  ctx.globalAlpha = alpha;

  /* Draw tiers from bottom to top so upper tiers overlap lower */
  for (let i = tiers - 1; i >= 0; i--) {
    const t   = i / (tiers - 1);           /* 0 = top tier, 1 = bottom */
    const t1  = (i + 1) / (tiers - 1);

    const apexY  = baseY - trunkH - bodyH * (1 - t);
    const baseYt = baseY - trunkH - bodyH * (1 - t1);
    const halfW  = maxW * (0.08 + 0.92 * t1);

    /* Colour gradient — lighter at top, darker at bottom */
    const g = dark
      ? `rgba(10,30,15,${0.7 + t * 0.3})`
      : `rgba(${Math.round(18 + t * 16)},${Math.round(60 + t * 24)},${Math.round(28 + t * 18)},1)`;

    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(cx, apexY);

    /* Right side — bezier "drooping branch" shape */
    ctx.bezierCurveTo(
      cx + halfW * 0.45, apexY + (baseYt - apexY) * 0.55,
      cx + halfW * 1.18, baseYt - (baseYt - apexY) * 0.12,
      cx + halfW,        baseYt
    );
    /* Bottom right → left */
    ctx.lineTo(cx - halfW, baseYt);
    /* Left side — mirror */
    ctx.bezierCurveTo(
      cx - halfW * 1.18, baseYt - (baseYt - apexY) * 0.12,
      cx - halfW * 0.45, apexY + (baseYt - apexY) * 0.55,
      cx, apexY
    );
    ctx.fill();
  }

  /* Trunk */
  ctx.fillStyle = dark ? "rgba(15,8,4,0.9)" : "rgba(38,20,10,0.85)";
  ctx.fillRect(cx - trunkW / 2, baseY - trunkH, trunkW, trunkH);

  ctx.restore();
}

/* ─── Draw ground fog band ───────────────────────────────────────── */
function drawFog(ctx, w, h, dark) {
  const fogY  = h * 0.72;
  const fogH  = h * 0.20;
  const grad  = ctx.createLinearGradient(0, fogY, 0, fogY + fogH);
  if (dark) {
    grad.addColorStop(0,   "rgba(5,18,5,0)");
    grad.addColorStop(0.5, "rgba(5,18,5,0.18)");
    grad.addColorStop(1,   "rgba(5,18,5,0)");
  } else {
    grad.addColorStop(0,   "rgba(230,250,235,0)");
    grad.addColorStop(0.5, "rgba(230,250,235,0.32)");
    grad.addColorStop(1,   "rgba(230,250,235,0)");
  }
  ctx.fillStyle = grad;
  ctx.fillRect(0, fogY, w, fogH);
}

/* ─── Draw background gradient ───────────────────────────────────── */
function drawSky(ctx, w, h, dark) {
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  if (dark) {
    grad.addColorStop(0,   "#030a03");
    grad.addColorStop(0.5, "#051005");
    grad.addColorStop(1,   "#0a1a0a");
  } else {
    grad.addColorStop(0,   "#f8fffe");
    grad.addColorStop(0.4, "#f1fdf5");
    grad.addColorStop(0.75,"#e6f9ec");
    grad.addColorStop(1,   "#d8f5e4");
  }
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);
}

/* ─── Draw one leaf shape ───────────────────────────────────────── */
function drawLeaf(ctx, p) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.rot);
  ctx.globalAlpha = Math.max(0, p.life) * p.alpha;
  ctx.fillStyle = p.color;

  const w = p.w, h = p.h;
  ctx.beginPath();
  ctx.moveTo(0, -h);
  ctx.bezierCurveTo( w * 0.9, -h * 0.5,  w * 0.9,  h * 0.4,  0,  h);
  ctx.bezierCurveTo(-w * 0.9,  h * 0.4, -w * 0.9, -h * 0.5,  0, -h);
  ctx.fill();

  /* Midrib vein */
  ctx.globalAlpha = Math.max(0, p.life) * p.alpha * 0.28;
  ctx.strokeStyle = "#0a3a1a";
  ctx.lineWidth   = 0.55;
  ctx.beginPath();
  ctx.moveTo(0, -h * 0.85);
  ctx.lineTo(0,  h * 0.85);
  ctx.stroke();

  ctx.restore();
}

/* ─── Main component ─────────────────────────────────────────────── */
export default function NatureBg({ darkMode }) {
  const canvasRef   = useRef(null);
  const offRef      = useRef(null); /* offscreen: static sky + trees */
  const stateRef    = useRef({
    particles: [],
    w: 0, h: 0,
    scrollY: 0,
    raf: null,
    dark: false,
    ambientTimer: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    const s      = stateRef.current;

    /* Detect dark mode initially */
    s.dark = darkMode;

    /* ── Resize + rebuild offscreen ── */
    const buildStatic = () => {
      s.w = canvas.width  = window.innerWidth;
      s.h = canvas.height = window.innerHeight;

      const off    = document.createElement("canvas");
      off.width    = s.w;
      off.height   = s.h;
      const octx   = off.getContext("2d");
      offRef.current = off;

      /* Sky gradient */
      drawSky(octx, s.w, s.h, s.dark);

      /* Trees — sorted back-to-front already in TREES array */
      TREES.forEach((t) => {
        const px   = t.x * s.w;
        const h    = t.h * t.scale;
        const base = s.h - 2;
        drawFirTree(octx, px, base, h, t.alpha, s.scrollY, s.dark);
      });

      /* Ground fog */
      drawFog(octx, s.w, s.h, s.dark);
    };

    buildStatic();
    window.addEventListener("resize", buildStatic, { passive: true });

    /* ── Scroll (parallax) ── */
    const onScroll = () => {
      s.scrollY = window.scrollY;
      buildStatic(); /* rebuild with new scroll */
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    /* ── Spawn leaf near a random tree crown ── */
    const spawnLeaf = (cx, cy, vx, vy) => {
      const sz  = 5 + Math.random() * 9;
      s.particles.push({
        id:    _uid++,
        x:     cx + (Math.random() - 0.5) * 50,
        y:     cy + (Math.random() - 0.5) * 25,
        vx:    vx + (Math.random() - 0.5) * 1.2,
        vy:    vy - 0.6 - Math.random() * 1.0,
        rot:   Math.random() * Math.PI * 2,
        rotV:  (Math.random() - 0.5) * 0.11,
        w:     sz * 0.42,
        h:     sz,
        alpha: 0.70 + Math.random() * 0.30,
        life:  1.0,
        decay: 0.0028 + Math.random() * 0.0035,
        color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
      });
    };

    /* Crown positions computed from TREES */
    const crowns = () => TREES.map((t) => ({
      x:  t.x * s.w,
      y:  s.h - t.h * t.scale * t.crownFrac,
    }));

    /* ── Ambient leaf fall — light wind ── */
    const ambientLeaf = () => {
      const cs = crowns();
      const c  = cs[Math.floor(Math.random() * cs.length)];
      /* gentle lateral drift */
      spawnLeaf(c.x, c.y, (Math.random() - 0.5) * 0.8, 0);
    };

    /* ── Animation loop ── */
    const loop = (ts) => {
      if (!offRef.current) { s.raf = requestAnimationFrame(loop); return; }

      /* Blit static scene */
      ctx.clearRect(0, 0, s.w, s.h);
      ctx.drawImage(offRef.current, 0, 0);

      /* Ambient spawn: one leaf every ~2.8s */
      s.ambientTimer += 16;
      if (s.ambientTimer > 2800) { ambientLeaf(); s.ambientTimer = 0; }

      /* Update + draw leaves */
      s.particles = s.particles.filter((p) => p.life > 0.01);
      for (const p of s.particles) {
        /* physics */
        p.vy  += 0.038;               /* gravity */
        p.vx  += Math.sin(ts * 0.0008 + p.id * 0.7) * 0.018; /* wind sway */
        p.vx  *= 0.986;
        p.vy  *= 0.993;
        p.x   += p.vx;
        p.y   += p.vy;
        p.rot += p.rotV;
        p.rotV += Math.sin(ts * 0.001 + p.id) * 0.001; /* tumble */
        p.life -= p.decay;
        drawLeaf(ctx, p);
      }

      s.raf = requestAnimationFrame(loop);
    };

    s.raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", buildStatic);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(s.raf);
    };
  }, []);

  useEffect(() => {
    stateRef.current.dark = darkMode;
    window.dispatchEvent(new Event("resize"));
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", inset: 0,
        width: "100%", height: "100%",
        zIndex: -2, display: "block",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
