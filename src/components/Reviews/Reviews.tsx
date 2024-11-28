import style from './Reviews.module.css';
import { IReviewsProps } from './Reviews.props';

export function Reviews({ name, date, text }: IReviewsProps) {
  return (
    <div className={style['reviews']}>
      Отзывы
      <div className={style['wrapper']}>
        <div className={style['title']}>
          <div className={style['name']}>{name}</div>
          <div className={style['date']}>{date}</div>
        </div>
        <div className={style['text']}>{text}</div>
      </div>
    </div>
  );
}
<div className={style['reviews']}>Отзывы</div>;
