import { useEffect, useState } from "react";
import { FaTimes, FaTrophy } from "react-icons/fa";

const STORAGE_KEY = "achievementDismissed";

const AchievementModal = () => {
  const [show, setShow] = useState(false);
  const [dontShow, setDontShow] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY);
      if (!dismissed) {
        // small timeout so it feels like a gentle entrance after page render
        const t = setTimeout(() => setShow(true), 350);
        return () => clearTimeout(t);
      }
    } catch (e) {
      setShow(true);
    }
  }, []);

  const close = () => {
    if (dontShow) {
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch (e) {}
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />

      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-md mx-4 theme-card rounded-2xl p-6 sm:p-8 text-center shadow-2xl"
      >
        <button
          aria-label="Close achievement"
          onClick={close}
          className="absolute right-3 top-3 text-[#E8F1FF] hover:text-[#4DB6FF] transition-colors"
        >
          <FaTimes />
        </button>

        <div className="flex flex-col items-center gap-4">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg">
            <FaTrophy className="text-2xl" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold heading-font theme-gradient-text">Achievement Unlocked</h3>

          <p className="site-body theme-body-text">Proud to share I secured <strong>AIR 2</strong> in <em>EROH (Engineer Ring of Honour)</em> — Naukri, 2025.</p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full mt-2 justify-center">
            <button
              onClick={() => { window.open("https://www.naukri.com/campus/contests/scholarship-for-engineering-students?src=gnbParticipate", "_blank", "noopener,noreferrer"); }}
              className="theme-btn w-full sm:w-auto px-6 py-2.5 whitespace-nowrap"
            >
              Celebrate 🎉
            </button>

            <button
              onClick={close}
              className="theme-btn-outline w-full sm:w-auto px-6 py-2.5 whitespace-nowrap"
            >
              Close
            </button>
          </div>

          <label className="mt-3 text-sm flex items-center gap-2 justify-center text-[#B7C8E6]">
            <input type="checkbox" className="accent-[#4DB6FF]" checked={dontShow} onChange={(e) => setDontShow(e.target.checked)} />
            Don't show again
          </label>
        </div>
      </div>
    </div>
  );
};

export default AchievementModal;
