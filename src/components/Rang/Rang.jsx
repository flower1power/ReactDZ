import { imagePaths } from '../../utils/imagePath.constant';
import style from './Rang.module.css';

function Rang({ text }) {
  return (
    <div className={style['rang']}>
      <img src={imagePaths.star} alt="Звезда"></img>
      {text}
    </div>
  );
}

export default Rang;
