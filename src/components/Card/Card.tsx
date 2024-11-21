import style from './Card.module.css';
import Link from '../Link/Link';
import Rang from '../Rang/Rang';
import { imagePaths } from '../../utils/imagePath.constant';
import { ICardProps } from './Card.props';
import CardButton from '../CardButton/CardButton';

function Card({ imgPath, name, rang }: ICardProps) {
  return (
    <div className={style['card']}>
      <Rang text={rang}></Rang>
      <div className={style['card-img-wrapper']}>
        <img
          className={style['card-img']}
          src={imgPath}
          alt="Постер Фильма"
        ></img>
      </div>
      <div className={style['card-footer']}>
        <Link className={style['card-link']} text={name} isActive={true}></Link>
        <CardButton text={'В избранное'}>
          <img src={imagePaths.like}></img>
        </CardButton>
      </div>
    </div>
  );
}

export default Card;
