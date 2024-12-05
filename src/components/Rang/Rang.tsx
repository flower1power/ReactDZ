import { imagePaths } from '../../utils/imagePath.constant';
import style from './Rang.module.css';
import { IRangProps } from './Rang.props';
import cn from 'classnames';

function Rang({ text, className }: IRangProps) {
  return (
    <div className={cn(style['rang'], className)}>
      <img src={imagePaths.star} alt="Звезда"></img>
      {text || 0}
    </div>
  );
}

export default Rang;
