import style from './Link.module.css';
import { ILinkProps } from './Link.propos';

function Link({ text, children, isActive, onClick }: ILinkProps) {
  const newSyle = isActive
    ? style['link'] + ' ' + style['active']
    : style['link'];

  return (
    <a className={newSyle} href="#" onClick={onClick}>
      {text}
      {children}
    </a>
  );
}

export default Link;
