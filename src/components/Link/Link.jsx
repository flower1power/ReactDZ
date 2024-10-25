import './Link.css';

function Link({ text, children, isActive }) {
  return (
    <a className={`link ${isActive ? 'active' : ''}`} href="#">
      {text}
      {children}
    </a>
  );
}

export default Link;
