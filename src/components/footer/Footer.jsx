import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper footer__container">
        <div className="footer__left">
          <div className="footer__left__img">
            <img src="./assets/logo2.png" alt="" />
          </div>
          <span className="secondary">
            Our vision to make all people <br />
            to best place to live for them.
          </span>
        </div>
        <div className="footer__right">
          <span className="primary">Information</span>
          <span className="secondary">123 Mumbai, PR 5311, INDIA</span>
          <ul>
            <li>
              <a href="">Property</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
