import style from './NavBar.module.css';
import { INavBarProps } from './NavBar.props';

function NavBar({ children }: INavBarProps) {
  return <nav className={style['nav']}>{children}</nav>;
}

export default NavBar;
