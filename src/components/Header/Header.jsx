import './Header.css';
import Link from '../Link/Link';

function Header() {
  return (
    <div className="header">
      <img src="/src/public/logo.svg" alt="logo" className="logo"></img>
      <nav className="nav">
        <Link className={'active'} text={'Поиск фильмов'}></Link>
        <Link text={'Мои фильмы'}></Link>
        <Link text={'Войти'}>
          <img
            src="/src/public/out.svg"
            alt="логотип выхода"
            className="out"
          ></img>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
