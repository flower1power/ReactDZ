import { ButtonHTMLAttributes } from 'react';

export interface ICardButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isFavorite: boolean;
}
