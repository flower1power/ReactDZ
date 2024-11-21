import style from './Header.module.css';
import Link from '../Link/Link';
import { imagePaths } from '../../utils/imagePath.constant';
import NavBar from '../NavBar/NavBar';
import { useContext } from 'react';
import { UserContext } from '../../context/users.context';

function Header() {
  const { users, logoutUser } = useContext(UserContext);
  const loggedInUser = users.find((user) => user.isLogined);

  const link =
    loggedInUser && loggedInUser.name ? (
      <Link text={'Выйти'} onClick={logoutUser}></Link>
    ) : (
      <Link text={'Войти'}>
        <img
          src={imagePaths.outh}
          alt="логотип выхода"
          className={style['img']}
        ></img>
      </Link>
    );

  return (
    <div className={style['header']}>
      <img src={imagePaths.logo} alt="logo" className={style['logo']}></img>
      <NavBar>
        <Link isActive={true} text={'Поиск фильмов'}></Link>
        <Link text={'Мои фильмы'}></Link>
        {loggedInUser && loggedInUser.name ? (
          <Link text={loggedInUser.name}>
            <img
              src={imagePaths.user}
              alt="логотип человека"
              className={style['img']}
            ></img>
          </Link>
        ) : null}
        {link}
      </NavBar>
    </div>
  );
}

export default Header;
