// Manifesto.jsx — landing/manifesto page.

const Manifesto = ({ onNavigate, onCatalogueOpen }) => {
  const principles = [
    'Human-first',
    'Public by default',
    'Plain language before legal language',
    'Attribution before automation',
    'Commitments before monetisation',
    'Edit history preserved',
    'Withdrawal recorded, not erased',
  ];

  return (
    <div className="manifesto-page fade-in">
      <section className="manifesto-hero">
        <img src="../../assets/mark-on-charcoal.png" alt="" className="watermark" />
        <div className="container">
          <div className="hero-mark">
            <img src="../../assets/mark-on-charcoal.png" alt="" />
          </div>
          <div className="hero-wordmark">
            <span className="ai">ai</span>COVENANT
          </div>
          <div className="hero-sub">Brand foundations · A public covenant ledger</div>

          <div className="hero-divider"><span></span></div>

          <p className="hero-statement">
            A trust-first record of how AI helped create a work, what human labour may have been displaced or deferred, and what pledge the creator makes in return.
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => onNavigate('detail')}>Start a covenant</button>
            <button className="btn btn-secondary" onClick={() => onNavigate('detail')}>View example</button>
          </div>
        </div>
      </section>

      <section className="steps">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--s-7)' }}>
            <span className="eyebrow">Covenant capture</span>
            <h2 style={{ marginTop: 'var(--s-3)' }}>Three steps. Public record.</h2>
          </div>
          <div className="row">
            <div className="step">
              <span className="num">I</span>
              <h4>Name the work</h4>
              <p>The title under which the covenant will be publicly recorded.</p>
            </div>
            <div className="step">
              <span className="num">II</span>
              <h4>Declare the AI contribution</h4>
              <p>Plain language describing how AI was used and where it was not.</p>
            </div>
            <div className="step">
              <span className="num">III</span>
              <h4>Record the covenant or future pledge</h4>
              <p>Acknowledgements, beneficiaries, and value-sharing intent.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="manifesto-body">
        <div className="container-narrow">
          <span className="eyebrow">Manifesto</span>
          <h1 style={{ marginTop: 'var(--s-3)', marginBottom: 'var(--s-7)' }}>A covenant, not a contract.</h1>

          <p className="lead">
            AI-assisted creation should be transparent, accountable, and human-centred.
          </p>

          <p>
            aiCOVENANTS records where AI has contributed to a work, what human labour may have been substituted or deferred, who deserves acknowledgement, and what commitments the creator makes if value is later created.
          </p>
          <p className="dim">
            It is not a legal contract generator. It is not a marketplace. It is not a Patreon replacement, and it is not a token platform. It is a public trust record — durable, plain-spoken, and held to the same standard it asks of others.
          </p>

          <Lozenge />

          <span className="eyebrow">Core principles</span>
          <ul className="principles" style={{ padding: 0, marginTop: 'var(--s-4)' }}>
            {principles.map(p => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </section>

      <section className="catalogue-preview">
        <div className="container">
          <div className="head">
            <div>
              <span className="eyebrow">Volume I · Founding catalogue</span>
              <h2 style={{ marginTop: 'var(--s-2)' }}>Five works, publicly held.</h2>
            </div>
            <button className="btn-text" onClick={() => onNavigate('catalogue')}>Read the full catalogue →</button>
          </div>

          <div>
            {COVENANTS.map((c, i) => (
              <div key={c.id} className="cat-row" onClick={() => onCatalogueOpen(c.id)} style={{ borderTop: i === 0 ? '1px solid var(--rule)' : '0' }}>
                <span className="roman">{c.roman}</span>
                <div className="title-block">
                  <div className="title">{c.title}</div>
                  <div className="desc">{c.summary}</div>
                </div>
                <span className="creator">{c.creator}</span>
                <StatusChip status={c.status} label={c.statusLabel} />
                <span className="arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

window.Manifesto = Manifesto;
