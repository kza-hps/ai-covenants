// App.jsx — top-level shell + route state.

const App = () => {
  const [route, setRoute] = React.useState('manifesto');
  const [covenantId, setCovenantId] = React.useState('aicovenants');

  const covenant = COVENANTS.find(c => c.id === covenantId) || COVENANTS[3];

  const goto = (r) => {
    setRoute(r);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const openCovenant = (id) => {
    setCovenantId(id);
    goto('detail');
  };

  const onDarkHeader = route === 'manifesto' || route === 'detail';

  return (
    <div className="page" data-screen-label={
      route === 'manifesto' ? '01 Manifesto' :
      route === 'catalogue' ? '02 Catalogue' :
      `03 Covenant — ${covenant.title}`
    }>
      <Header route={route} onNavigate={goto} onDark={false} />
      {route === 'manifesto' && <Manifesto onNavigate={goto} onCatalogueOpen={openCovenant} />}
      {route === 'catalogue' && <Catalogue onOpen={openCovenant} />}
      {route === 'detail' && <CovenantDetail covenant={covenant} onBack={() => goto('catalogue')} />}
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
