import CardList from '../../components/CardList/CardList';
import Title from '../../components/Title/Title';
import { favorites } from '../../mock/cards';
import style from './Favorites.module.css';

export function Favorites() {
  return (
    <div className={style['wrapper']}>
      <Title title={'Избранное'}></Title>
      <CardList items={favorites}></CardList>
    </div>
  );
}

export default Favorites;
