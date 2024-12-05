import style from './CardList.module.css';
import Card from '../Card/Card';
import { ICardListProps } from './CardList.props';

function CardList({ items }: ICardListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <>
      <div className={style['card-list']}>
        {items.map((el) => (
          <Card
            key={Number(el['#IMDB_ID'].slice(2))}
            imdbId={el['#IMDB_ID']}
            imgPoster={
              el['#IMG_POSTER'] ? el['#IMG_POSTER'] : '/public/User.svg'
            }
            title={el['#TITLE']}
            rank={Number(el['#RANK'])}
          ></Card>
        ))}
      </div>
    </>
  );
}

export default CardList;
