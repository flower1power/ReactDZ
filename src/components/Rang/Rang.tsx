import { imagePaths } from '../../utils/imagePath.constant';
import style from './Rang.module.css';
import { IRangProps } from './Rang.props';

function Rang({ text }: IRangProps) {
  return (
    <div className={style['rang']}>
      <img src={imagePaths.star} alt="Звезда"></img>
      {text}
    </div>
  );
}

export default Rang;
