// Catalogue.jsx — founding catalogue page.

const Catalogue = ({ onOpen }) => (
  <div className="catalogue-page fade-in">
    <div className="container">
      <div className="page-head">
        <span className="eyebrow">Volume I · Public record</span>
        <h1>Founding covenant catalogue.</h1>
        <p className="page-sub">
          The five founding covenants under which works by Kauri Tukere and Hero’s Journey Creative are publicly held. Each entry is signed, plainly written, and preserved with edit history.
        </p>
      </div>

      <div style={{ marginTop: 'var(--s-7)' }}>
        {COVENANTS.map(c => (
          <div key={c.id} className="cat-row" onClick={() => onOpen(c.id)}>
            <span className="roman">{c.roman}</span>
            <div className="title-block">
              <div className="title">{c.title}</div>
              <div className="desc">{c.summary}</div>
            </div>
            <span className="creator">{c.creator}<br/><span className="meta">{c.location}</span></span>
            <StatusChip status={c.status} label={c.statusLabel} />
            <span className="arrow">→</span>
          </div>
        ))}
      </div>

      <Lozenge />
      <p style={{ color: 'var(--fg-muted)', fontSize: 14, lineHeight: 1.7, maxWidth: 640 }}>
        The founding catalogue exists to publish a small set of real covenants at high quality. It is intentionally short. New entries are added by invitation only and follow the same public-record standard.
      </p>
    </div>
  </div>
);

window.Catalogue = Catalogue;
