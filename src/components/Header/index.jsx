import "./style.css";

export const Header = ( {name} ) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <div className="header__logo">
            <h1 className="header__title">
              <a href="/" className="header__link">{name}</a>
            </h1>
          </div>
          <nav className="header__nav">
            <ul className="header__menu menu menu--hidden" id="menu">
              <li className="menu__item">
                <a href="/" className="menu__link">Domů</a>
              </li>
              <li className="menu__item">
                <a href="/Doprava" className="menu__link">Doprava</a>
              </li>
              <li className="menu__item">
                <a href="/Ubytovani" className="menu__link">Ubytování</a>
              </li>
              <li className="menu__item">
                <a href="/Itinerar" className="menu__link">Itinerář</a>
              </li>
              <li className="menu__item">
                <a href="/Slovnicek" className="menu__link">Slovníček</a>
              </li>
            </ul>

            <div
              className="menu__hamburger"
              id="hamburger"
              role="button"
              tabIndex={0}
              aria-label="Toggle menu"
              aria-expanded="false"
            >
              <span className="menu__line"></span>
              <span className="menu__line"></span>
              <span className="menu__line"></span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
