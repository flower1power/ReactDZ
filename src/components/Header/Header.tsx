import style from './Header.module.css';
import { imagePaths } from '../../utils/imagePath.constant';
import NavBar from '../NavBar/NavBar';
import { useContext } from 'react';
import { UserContext } from '../../context/users.context';
import { NavLink, useNavigate } from 'react-router';
import cn from 'classnames';

function Header() {
  const { users, logoutUser } = useContext(UserContext);
  const loggedInUser = users.find((user) => user.isLogined);
  const navigate = useNavigate();

  const handelInUser = (e: React.MouseEvent) => {
    logoutUser(e);
    navigate('/login');
  };

  const link =
    loggedInUser && loggedInUser.name ? (
      <NavLink
        to={'/'}
        onClick={handelInUser}
        className={cn(style['nav-link'])}
      >
        Выйти
      </NavLink>
    ) : (
      <NavLink
        to={'/login'}
        className={({ isActive }) => {
          return cn(style['nav-link'], {
            [style['active']]: isActive,
          });
        }}
      >
        Войти
        <img
          src={imagePaths.outh}
          alt="логотип выхода"
          className={cn(style['img'])}
        ></img>
      </NavLink>
    );

  return (
    <div className={style['header']}>
      <img src={imagePaths.logo} alt="logo" className={style['logo']}></img>
      <NavBar>
        <NavLink
          to={'/'}
          className={({ isActive }) => {
            return cn(style['nav-link'], {
              [style['active']]: isActive,
            });
          }}
        >
          Поиск фильмов
        </NavLink>
        <NavLink
          to={'/favorites'}
          className={({ isActive }) => {
            return cn(style['nav-link'], {
              [style['active']]: isActive,
            });
          }}
        >
          Мои фильмы
        </NavLink>
        {loggedInUser && loggedInUser.name ? (
          <NavLink
            to={'/profile'}
            className={({ isActive }) => {
              return cn(style['nav-link'], {
                [style['active']]: isActive,
              });
            }}
          >
            {loggedInUser.name}
            <img
              src={imagePaths.user}
              alt="логотип человека"
              className={style['img']}
            ></img>
          </NavLink>
        ) : null}
        {link}
      </NavBar>
    </div>
  );
}

export default Header;
