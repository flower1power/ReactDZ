import style from './Link.module.css';

function Link({ text, children, isActive }) {
  const newSyle = isActive
    ? style['link'] + ' ' + style['active']
    : style['link'];

  console.log(newSyle);

  return (
    <a className={newSyle} href="#">
      {text}
      {children}
    </a>
  );
}

export default Link;
