import style from './Header.module.css';
import Link from '../Link/Link';
import { imagePaths } from '../../utils/imagePath. constant';
import NavBar from '../NavBar/NavBar';

function Header() {
  return (
    <div className={style['header']}>
      <img src={imagePaths.logo} alt="logo" className={style['logo']}></img>
      <NavBar>
        <Link isActive={true} text={'Поиск фильмов'}></Link>
        <Link text={'Мои фильмы'}></Link>
        <Link text={'Войти'}>
          <img
            src={imagePaths.outh}
            alt="логотип выхода"
            className={style['out']}
          ></img>
        </Link>
      </NavBar>
    </div>
  );
}

export default Header;
