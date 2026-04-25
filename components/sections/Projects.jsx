"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/projects";

/**
 * Projects — New Accordion Layout
 */
export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const stats = [
    { label: "Projects", value: PROJECTS.length > 9 ? PROJECTS.length : `0${PROJECTS.length}` },
    { label: "Years Active", value: "03" },
    { label: "Tech Stacks", value: "12+" }
  ];

  return (
    <section id="projects" className="sec-projects-new" aria-labelledby="proj-h">
      <div className="section">
        {/* Hero Overview Card */}
        <div className="proj-hero">
          <div className="proj-hero-left" data-reveal="left">
            <h2 id="proj-h" className="proj-hero-title">Projects</h2>
            <p className="proj-hero-tagline">
              A curated selection of robust platforms and tools, focused on 
              performance, scalability, and solving real-world problems.
            </p>
            <div className="proj-stats">
              {stats.map((s, i) => (
                <div key={i} className="proj-stat-item">
                  <span className="proj-stat-num">{s.value}</span>
                  <span className="proj-stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="proj-hero-right" data-reveal="right" data-delay="150">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" 
              alt="Coding Workspace" 
              className="proj-hero-img"
            />
          </div>
        </div>

        {/* Accordion Project List */}
        <div className="proj-list">
          {PROJECTS.map((proj, i) => {
            const isActive = expandedIndex === i;
            const projNum = String(i + 1).padStart(2, "0");
            const defaultImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80";
            const displayImage = proj.overviewImage || defaultImage;

            return (
              <div 
                key={proj.name} 
                className={`proj-row ${isActive ? "active" : ""}`}
                data-reveal="up"
                data-delay={i * 80}
              >
                {/* Row Header (Clickable) */}
                <div 
                  className="proj-row-header" 
                  onClick={() => setExpandedIndex(isActive ? -1 : i)}
                >
                  <span className="proj-row-num">{projNum}</span>
                  
                  {/* Thumbnail that slides in on hover */}
                  {!isActive && (
                    <div className="proj-row-thumb-wrap">
                      <img 
                        src={displayImage} 
                        alt={proj.name} 
                        className="proj-row-thumb" 
                      />
                    </div>
                  )}

                  <h3 className="proj-row-title">{proj.name}</h3>
                  
                  <div className="proj-row-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Collapsible Content */}
                <div className="proj-row-content-wrap">
                  <div className="proj-row-content-inner">
                    <div className="proj-row-content">
                      <div className="proj-content-left">
                        <p className="proj-row-desc">{proj.description}</p>
                        
                        <div className="proj-tags-list">
                          {proj.tags.map(tag => (
                            <span key={tag} className="proj-tag-pill">
                              <span className="proj-tag-txt">{tag}</span>
                            </span>
                          ))}
                        </div>

                        <div style={{ display: 'flex', gap: '12px' }}>
                          {proj.github && (
                            <a 
                              href={proj.github} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="proj-github-btn"
                            >
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                              </svg>
                              View Repository
                            </a>
                          )}
                          {proj.live && (
                            <a 
                              href={proj.live} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="proj-github-btn"
                              style={{ background: 'transparent', border: '1px solid var(--g600)', color: 'var(--g600)' }}
                            >
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                              </svg>
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                      
                      <div className="proj-content-right">
                        <img 
                          src={displayImage} 
                          alt={proj.name} 
                          className="proj-large-img" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
