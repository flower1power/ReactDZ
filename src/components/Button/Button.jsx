import { forwardRef } from 'react';
import style from './Button.module.css';

const Button = forwardRef(function Button({ text, ...props }, ref) {
  return (
    <button {...props} ref={ref} className={style['button']}>
      {text}
    </button>
  );
});

export default Button;
