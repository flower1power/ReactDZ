import style from './CardButton.module.css';

function CardButton({ text, children }) {
  return (
    <button className={style['card-button']}>
      {children}
      {text}
    </button>
  );
}

export default CardButton;
