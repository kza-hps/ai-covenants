// CovenantDetail.jsx — public declaration page for a single covenant.

const Section = ({ num, title, children }) => (
  <div className="detail-section">
    <div className="section-label">
      <span className="num">{num}</span>
      <h3>{title}</h3>
    </div>
    <div className="section-content">{children}</div>
  </div>
);

const CovenantDetail = ({ covenant, onBack }) => {
  const c = covenant;
  return (
    <div className="fade-in">
      <section className="detail-hero">
        <img src="../../assets/mark-on-charcoal.png" alt="" className="watermark" />
        <div className="container">
          <div className="crumb">
            <a onClick={onBack} style={{ cursor: 'pointer' }}>Catalogue</a>
            <span>·</span>
            <span style={{ color: 'var(--stone-gold)' }}>Volume I</span>
          </div>
          <div className="roman">Covenant {c.roman}</div>
          <h1>{c.title}</h1>
          <div className="creator-line">{c.creator} · {c.location}</div>

          <div className="meta-bar">
            <div className="field">
              <span className="label">Status</span>
              <StatusChip status={c.status} label={c.statusLabel} />
            </div>
            <div className="field">
              <span className="label">Version</span>
              <span className="value">{c.version}</span>
            </div>
            <div className="field">
              <span className="label">First published</span>
              <span className="value">{c.versions[c.versions.length - 1].date}</span>
            </div>
            <div className="field">
              <span className="label">Last updated</span>
              <span className="value">{c.published}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-body">
        <div className="container">
          <Section num="§ 01" title="Work">
            <p>{c.summary}</p>
          </Section>

          <Section num="§ 02" title="Creator">
            <p>{c.creator}.</p>
            <p style={{ color: 'var(--fg-muted)' }}>Recording from {c.location}.</p>
          </Section>

          <Section num="§ 03" title="AI-use declaration">
            <p>{c.aiUse}</p>
          </Section>

          <Section num="§ 04" title="Human labour displaced or deferred">
            <p>{c.labour}</p>
          </Section>

          <Section num="§ 05" title="Acknowledgements">
            <ul>{c.acknowledgements.map((a, i) => <li key={i}>{a}</li>)}</ul>
          </Section>

          <Section num="§ 06" title="Beneficiaries">
            <p>{c.beneficiaries}</p>
          </Section>

          <Section num="§ 07" title="Value-sharing intent">
            <p>{c.valueIntent}</p>
          </Section>

          <Section num="§ 08" title="Version history">
            <div>
              {c.versions.map(v => (
                <div className="version-row" key={v.v}>
                  <span className="v">{v.v}</span>
                  <span className="d">{v.date}</span>
                  <span>{v.note}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section num="§ 09" title="Withdrawal status">
            {c.withdrawn
              ? <p>This covenant has been withdrawn. The withdrawal is recorded here, not erased.</p>
              : <>
                  <p style={{ color: 'var(--fg-muted)' }}>Not withdrawn. If withdrawal occurs, it will be recorded as a new version above and the work removed from the public catalogue without erasure of this record.</p>
                  <div style={{ marginTop: 'var(--s-5)', display: 'flex', alignItems: 'center', gap: 'var(--s-4)' }}>
                    <button className="btn btn-administrative">
                      <span className="glyph">§</span>Record withdrawal
                    </button>
                    <span style={{ fontSize: 12, color: 'var(--fg-quiet)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
                      Requires signed declaration. The act of withdrawal is itself recorded.
                    </span>
                  </div>
                </>
            }
          </Section>

          <Lozenge />
          <p style={{ fontSize: 11, color: 'var(--fg-quiet)', textAlign: 'center', letterSpacing: 'var(--track-archival)', textTransform: 'uppercase' }}>
            End of public covenant record · <span style={{ textTransform: 'none', letterSpacing: 0, fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>{c.title}</span> · {c.version}
          </p>
        </div>
      </section>
    </div>
  );
};

window.CovenantDetail = CovenantDetail;
