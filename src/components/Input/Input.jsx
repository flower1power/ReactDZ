import { forwardRef } from 'react';
import { imagePaths } from '../../utils/imagePath.constant';
import style from './Input.module.css';
import cn from 'classnames';

const Input = forwardRef(function Input(
  { isSearch, placeholder, onChange, value, ...props },
  ref,
) {
  const img = isSearch && (
    <img
      src={imagePaths.search}
      alt="Картинка поиска"
      className={style['input-icon']}
    />
  );

  return (
    <div className={style['input-container']}>
      {img}
      <input
        {...props}
        ref={ref}
        className={cn(style['input'], {
          [style['no-search']]: !isSearch,
        })}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
});

export default Input;
