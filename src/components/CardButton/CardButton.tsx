import style from './CardButton.module.css';
import { ICardButtonProps } from './CardButton.props';

function CardButton({ text, children }: ICardButtonProps) {
  return (
    <button className={style['card-button']}>
      {children}
      {text}
    </button>
  );
}

export default CardButton;
