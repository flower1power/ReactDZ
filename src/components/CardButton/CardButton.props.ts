import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ICardButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  text: string;
}
