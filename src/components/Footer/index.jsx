/* eslint-disable jsx-a11y/anchor-has-content */
const Footer = () => {
  return (
    <div className="footer-container flex column">
      <div className="footer-container flex justify">
        <FooterItem label="about" link="/" />
        <FooterItem label="blog" link="/" />
        <FooterItem label="jobs" link="/" />
        <FooterItem label="help" link="/" />
        <FooterItem label="terms" link="/" />
      </div>
    </div>
  );
};

const FooterItem = ({ link, label }) => {
  return (
    <a alt={label} href={link} className="footer-item">
      {label}
    </a>
  );
};

export default Footer;
