import style from './Card.module.css';
import Link from '../Link/Link';
import Rang from '../Rang/Rang';
import { imagePaths } from '../../utils/imagePath.constant';
import { ICardProps } from './Card.props';
import CardButton from '../CardButton/CardButton';
import { NavLink } from 'react-router';

function Card(props: ICardProps) {
  return (
    <NavLink to={`/product/${props.id}`}>
      <div className={style['card']}>
        <Rang text={props.rang} className={style['rang']}></Rang>
        <div className={style['card-img-wrapper']}>
          <img
            className={style['card-img']}
            src={props.imgPath}
            alt="Постер Фильма"
          ></img>
        </div>
        <div className={style['card-footer']}>
          <Link
            className={style['card-link']}
            text={props.name}
            isActive={true}
          ></Link>
          <CardButton text={'В избранное'}>
            <img src={imagePaths.like}></img>
          </CardButton>
        </div>
      </div>
    </NavLink>
  );
}

export default Card;
