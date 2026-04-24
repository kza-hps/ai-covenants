// Footer.jsx

const Footer = () => (
  <footer className="kit-footer">
    <div className="footer-grid">
      <div>
        <Wordmark size={20} gold />
        <p style={{ color: 'var(--fg-on-dark-muted)', marginTop: 'var(--s-4)', fontSize: 13, lineHeight: 1.6, maxWidth: 260 }}>
          A public covenant ledger for ethical AI use in creative and commercial work.
        </p>
      </div>
      <div className="col-links">
        <span className="eyebrow" style={{ color: 'var(--stone-gold)', marginBottom: 6 }}>Founding catalogue</span>
        <a href="#">VouchMeApp</a>
        <a href="#">FASCIA</a>
        <a href="#">Ho and the Baby Eater</a>
        <a href="#">aiCOVENANTS</a>
        <a href="#">ElevenLabs voice-use covenant</a>
      </div>
      <div className="col-links">
        <span className="eyebrow" style={{ color: 'var(--stone-gold)', marginBottom: 6 }}>Public record</span>
        <a href="#">Manifesto</a>
        <a href="#">How a covenant works</a>
        <a href="#">Withdrawal policy</a>
        <a href="#">Licence position</a>
      </div>
    </div>
    <div className="footer-meta">
      <span style={{ fontSize: 11, letterSpacing: 'var(--track-archival)', textTransform: 'uppercase', color: 'var(--fg-on-dark-muted)' }}>
        © 2026 Kauri Tukere · Public record · No reuse without written permission
      </span>
      <div className="hjc">
        <img src="../../assets/hjc-mark.png" alt="" />
        <span>Hero’s Journey Creative</span>
      </div>
    </div>
  </footer>
);

window.Footer = Footer;
