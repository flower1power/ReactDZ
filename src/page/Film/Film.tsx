import { useParams } from 'react-router';
import style from './Film.module.css';
import { cards, description } from '../../mock/cards';
import Rang from '../../components/Rang/Rang';
import CardButton from '../../components/CardButton/CardButton';
import { imagePaths } from '../../utils/imagePath.constant';
import { Description } from '../../components/Description/Description';
import { Reviews } from '../../components/Reviews/Reviews';

export function Film() {
  const { id } = useParams();

  const film = cards.filter((el) => {
    return el.id === Number(id);
  })[0];

  return (
    <div className={style['wrapper']}>
      <div className={style['title-wrapper']}>
        <div className={style['title']}>Поиск фильмов</div>
        <div className={style['film-name']}>{film.name}</div>
      </div>
      <div className={style['body-wrapper']}>
        <img
          className={style['film-img']}
          src={film.imgPath}
          alt="Постер фильма"
        />

        <div className={style['film-descriptions']}>
          <div className={style['description']}>
            After the devastating events of Avengers: Infinity War, the universe
            is in ruins due to the efforts of the Mad Titan, Thanos. With the
            help of remaining allies, the Avengers must assemble once more in
            order to undo Thanos' actions and restore order to the universe once
            and for all, no matter what consequences may be in store.
          </div>
          <div className={style['rang-and-addFavorites']}>
            <Rang className={style['rang']} text={film.rang}></Rang>
            <CardButton text={'В избранное'}>
              <img src={imagePaths.like}></img>
            </CardButton>
          </div>
          <Description
            title={description.type.title}
            description={description.type.description}
          ></Description>
          <Description
            title={description.date.title}
            description={description.date.description}
          ></Description>
          <Description
            title={description.duration.title}
            description={description.duration.description}
          ></Description>
          <Description
            title={description.genre.title}
            description={description.genre.description}
          ></Description>
        </div>
      </div>
      <Reviews
        name={description.reviews.title}
        date={description.reviews.date}
        text={description.reviews.description}
      ></Reviews>
    </div>
  );
}
