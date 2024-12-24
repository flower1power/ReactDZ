import { imagePaths } from '../../utils/imagePath.constant';
import style from './CardButton.module.css';
import { ICardButtonProps } from './CardButton.props';
import cn from 'classnames';

function CardButton({ isFavorite = false, ...props }: ICardButtonProps) {
  const text = !isFavorite ? 'В избранное' : 'В избраном';
  const imgSrc = !isFavorite ? imagePaths.like : imagePaths.noLike;

  return (
    <button
      className={cn(style['card-button'], {
        [style['card-button_favorite']]: isFavorite,
      })}
      {...props}
    >
      <img src={imgSrc} alt={text}></img>
      {text}
    </button>
  );
}

export default CardButton;
