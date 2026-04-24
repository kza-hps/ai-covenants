// Header.jsx

const Header = ({ route, onNavigate, onDark }) => {
  const navItems = [
    { id: 'manifesto', label: 'Manifesto' },
    { id: 'catalogue', label: 'Catalogue' },
    { id: 'detail', label: 'Read example' },
  ];
  return (
    <header className={`kit-header ${onDark ? 'on-dark' : ''}`}>
      <div className="lockup" onClick={() => onNavigate('manifesto')}>
        <BrandMark tone={onDark ? 'charcoal' : 'ivory'} size={26} />
        <Wordmark size={15} />
      </div>
      <nav>
        {navItems.map(item => (
          <button
            key={item.id}
            className={route === item.id ? 'active' : ''}
            onClick={() => onNavigate(item.id)}>
            {item.label}
          </button>
        ))}
        <button className="btn btn-primary" style={{ padding: '10px 18px' }} onClick={() => onNavigate('manifesto')}>
          Start a covenant
        </button>
      </nav>
    </header>
  );
};

window.Header = Header;
