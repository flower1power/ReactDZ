import style from './Card.module.css';
import Rang from '../Rang/Rang';
import { imagePaths } from '../../utils/imagePath.constant';
import { ICardProps } from './Card.props';
import CardButton from '../CardButton/CardButton';
import { NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { TAppDispathe, TRootState } from '../../store/store';
import { MouseEvent } from 'react';
import { addToFavorites, removeFromFavorites } from '../../store/user.slice';

function Card(props: ICardProps) {
  const dispatch = useDispatch<TAppDispathe>();
  const loggedInUser = useSelector((state: TRootState) =>
    state.users.users.find((user) => user.isLogined),
  );

  const isFavorite = loggedInUser?.items.some(
    (item) => item['#IMDB_ID'] === props.imdbId,
  );

  const handleFavoriteToggle = (e: MouseEvent) => {
    e.preventDefault();

    if (!loggedInUser) return;

    if (isFavorite) {
      dispatch(
        removeFromFavorites({
          userName: loggedInUser.name,
          imdbId: props.imdbId,
        }),
      );
    } else {
      dispatch(
        addToFavorites({
          userName: loggedInUser.name,
          movie: {
            '#TITLE': props.title,
            '#YEAR': Number(props.year),
            '#IMDB_ID': props.imdbId,
            '#RANK': props.rank,
            '#ACTORS': props.actors,
            '#AKA': props.aka,
            '#IMDB_URL': props.imdbUrl,
            '#IMDB_IV': props.imdbIv,
            '#IMG_POSTER': props.imgPoster,
            photo_width: Number(props.photoWidth),
            photo_height: Number(props.photoHeight),
          },
        }),
      );
    }
  };

  return (
    <div className={style['card']}>
      <NavLink to={`/product/${props.imdbId}`}>
        <Rang text={props.rank} className={style['rang']}></Rang>
        <div className={style['card-img-wrapper']}>
          <img
            className={style['card-img']}
            src={props.imgPoster}
            alt="Постер Фильма"
          ></img>
        </div>
      </NavLink>
      <div className={style['card-footer']}>
        <span className={style['name']}>{props.title}</span>
        <CardButton isFavorite={!!isFavorite} onClick={handleFavoriteToggle}>
          <img src={imagePaths.like}></img>
        </CardButton>
      </div>
    </div>
  );
}

export default Card;
