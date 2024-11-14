import style from './Link.module.css';

function Link({ text, children, isActive, onClick }) {
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
