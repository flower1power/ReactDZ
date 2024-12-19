import style from './Header.module.css';
import { imagePaths } from '../../utils/imagePath.constant';
import NavBar from '../NavBar/NavBar';
import { NavLink, useNavigate } from 'react-router';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { TAppDispathe, TRootState } from '../../store/store';
import { logoutUser } from '../../store/user.slice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch<TAppDispathe>();
  const { users } = useSelector((state: TRootState) => state.users);
  const loggedInUser = users.find((user) => user.isLogined);
  const countItems = loggedInUser?.items.length;

  const handelInUser = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  const counter =
    countItems && countItems > 0 ? (
      <div className={style['cart-counter']}>{countItems}</div>
    ) : null;

  const link = loggedInUser ? (
    <NavLink to={'/'} onClick={handelInUser} className={cn(style['nav-link'])}>
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
          Мои фильмы{counter}
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
