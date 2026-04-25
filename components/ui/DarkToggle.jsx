/**
 * DarkToggle — pill toggle switch for light/dark mode.
 * Pure presentational: receives darkMode state and toggle handler via props.
 */
export default function DarkToggle({ darkMode, onToggle }) {
  return (
    <button
      className={`dark-toggle${darkMode ? " on" : ""}`}
      onClick={onToggle}
      type="button"
      aria-pressed={darkMode}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Light mode" : "Dark mode"}
    >
      <span className="dark-toggle-track" aria-hidden="true">
        <span className="dark-toggle-icon dark-toggle-sun">☀️</span>
        <span className="dark-toggle-icon dark-toggle-moon">🌙</span>
      </span>
      <span className="dark-toggle-knob" aria-hidden="true" />
    </button>
  );
}
