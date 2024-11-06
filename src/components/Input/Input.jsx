import { imagePaths } from '../../utils/imagePath. constant';
import style from './Input.module.css';

function Input({ isSearch, placeholder }) {
  return (
    <div className={style['input-container']}>
      {isSearch && (
        <img
          src={imagePaths.search}
          alt="Картинка поиска"
          className={style['input-icon']}
        />
      )}
      <input className={style['input']} placeholder={placeholder} />
    </div>
  );
}

export default Input;
