import { forwardRef } from 'react';
import style from './Button.module.css';
import { IButtonProps } from './Button.props';

const Button = forwardRef<HTMLButtonElement, IButtonProps >(function Button({ text, ...props }, ref) {
  return (
    <button {...props} ref={ref} className={style['button']}>
      {text}
    </button>
  );
});

export default Button;
