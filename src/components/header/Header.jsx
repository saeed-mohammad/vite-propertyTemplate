import "./Header.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header>
      <nav className="mynav">
        <div className="logo">
          <img src="./assets/logo.png" alt="logo" />
        </div>
        <OutsideClickHandler onOutsideClick={() => setMenu(false)}>
          <ul className={menu ? "mynav__link active" : "mynav__link"}>
            <li className="mynav__link__item">
              <a href="/">Residencies</a>
            </li>
            <li className="mynav__link__item">
              <a href="/">Our Value</a>
            </li>
            <li className="mynav__link__item">
              <a href="/">Contact Us</a>
            </li>
            <li className="mynav__link__item">
              <a href="/">Get Started</a>
            </li>
            <li className="mynav__link__item">
              <button className="btn">
                <a href="/">Contact</a>
              </button>
            </li>
          </ul>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenu(!menu)}>
          <BiMenuAltRight />
        </div>
      </nav>
    </header>
  );
};

export default Header;
