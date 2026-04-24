// ui.jsx — small primitives used across the UI kit.

const Wordmark = ({ size = 16, color, gold }) => (
  <span className="wordmark" style={{ fontSize: size, color }}>
    <span className="wordmark-ai" style={{ color: gold ? 'var(--stone-gold)' : 'inherit' }}>ai</span>
    COVENANT
  </span>
);

const StatusChip = ({ status, label }) => (
  <span className={`chip ${status}`}>
    <span className="dot"></span>
    {label}
  </span>
);

const Lozenge = ({ onDark }) => (
  <div className={`divider ${onDark ? 'on-dark' : ''}`}>
    <span className="lozenge"></span>
  </div>
);

const Eyebrow = ({ children, style }) => (
  <span className="eyebrow" style={style}>{children}</span>
);

Object.assign(window, { Wordmark, StatusChip, Lozenge, Eyebrow });
