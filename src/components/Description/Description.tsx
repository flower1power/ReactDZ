import style from './Description.module.css';
import { IDescriptionProps } from './Description.props';

export function Description({ title, description }: IDescriptionProps) {
  return (
    <div className={style['wrapper']}>
      <div className={style['title']}>{title}</div>
      <div className={style['description']}>{description}</div>
    </div>
  );
}
