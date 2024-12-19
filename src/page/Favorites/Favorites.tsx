import { useSelector } from 'react-redux';
import CardList from '../../components/CardList/CardList';
import Title from '../../components/Title/Title';
import style from './Favorites.module.css';
import { TRootState } from '../../store/store';

export function Favorites() {
  const loggedInUser = useSelector((state: TRootState) =>
    state.users.users.find((user) => user.isLogined),
  );
  return (
    <div className={style['wrapper']}>
      <Title title={'Избранное'}></Title>
      <CardList items={loggedInUser?.items}></CardList>
    </div>
  );
}

export default Favorites;
