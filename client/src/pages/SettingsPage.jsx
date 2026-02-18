import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

const SettingsPage = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className="container py-4" style={{ maxWidth: 600 }}>
      <h2 className="mb-3">Settings</h2>
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="darkModeSwitch"
          checked={dark}
          onChange={toggleTheme}
        />
        <label className="form-check-label" htmlFor="darkModeSwitch">
          Dark mode
        </label>
      </div>
      <p className="text-muted">
        Progress tracking (viewed notes, downloads) and more settings can be wired
        here later. The current demo focuses on theme and core features.
      </p>
    </div>
  );
};

export default SettingsPage;

