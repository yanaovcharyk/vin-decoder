import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a className="menu__link" href="/">Головна</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="/variables">Список VIN</a>
            </li>
          </ul>
        </nav>
        <a href="/" className="logo">
          VIN decoder
        </a>
      </div>
    </header>
  )
}