import style from './CardList.module.css';
import Card from '../Card/Card';
import { ICardListProps } from './CardList.props';

function CardList({ items }: ICardListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className={style['card-list']}>
      {items.map((el) => (
        <Card
          id={el.id}
          imgPath={el.imgPath}
          name={el.name}
          rang={el.rang}
        ></Card>
      ))}
    </div>
  );
}

export default CardList;
