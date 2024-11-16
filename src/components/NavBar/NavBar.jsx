import style from './NavBar.module.css';

function NavBar({ children }) {
  return <nav className={style['nav']}>{children}</nav>;
}

export default NavBar;
