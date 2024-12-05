import style from './Reviews.module.css';
import { IReviewsProps } from './Reviews.props';

export function Reviews(propos: IReviewsProps) {
  return (
    <div className={style['reviews']}>
      Отзывы
      <div className={style['wrapper']}>
        <div className={style['title']}>
          <div className={style['name']}>{propos.name}</div>
          <div className={style['date']}>{propos.dateCreated}</div>
        </div>
        <div className={style['text']}>{propos.reviewBody}</div>
      </div>
    </div>
  );
}
