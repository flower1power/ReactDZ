import style from './Link.module.css';
import { ILinkProps } from './Link.propos';

function Link({ text, children, onClick }: ILinkProps) {
  return (
    <a className={style['link']} href="#" onClick={onClick}>
      {text}
      {children}
    </a>
  );
}

export default Link;
