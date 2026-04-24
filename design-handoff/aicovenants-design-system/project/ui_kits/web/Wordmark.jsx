// Wordmark.jsx — also exposes the brand mark variants.

const BrandMark = ({ tone = 'ivory', size = 28 }) => {
  const src = tone === 'charcoal'
    ? '../../assets/mark-on-charcoal.png'
    : '../../assets/mark-on-ivory.png';
  return <img src={src} alt="" style={{ width: size, height: size, objectFit: 'contain' }} />;
};

window.BrandMark = BrandMark;
