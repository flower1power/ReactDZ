import style from './Card.module.css';
import Rang from '../Rang/Rang';
import { imagePaths } from '../../utils/imagePath.constant';
import { ICardProps } from './Card.props';
import CardButton from '../CardButton/CardButton';
import { NavLink } from 'react-router';

function Card(props: ICardProps) {
  return (
    <NavLink to={`/product/${props.imdbId}`}>
      <div className={style['card']}>
        <Rang text={props.rank} className={style['rang']}></Rang>
        <div className={style['card-img-wrapper']}>
          <img
            className={style['card-img']}
            src={props.imgPoster}
            alt="Постер Фильма"
          ></img>
        </div>
        <div className={style['card-footer']}>
          <span className={style['name']}>{props.title}</span>
          <CardButton text={'В избранное'}>
            <img src={imagePaths.like}></img>
          </CardButton>
        </div>
      </div>
    </NavLink>
  );
}

export default Card;
