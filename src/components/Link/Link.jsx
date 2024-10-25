import './Link.css';

function Link({ text, children, className }) {
  return (
    <a className={`link ${className ? className : ''}`} href="#">
      {text}
      {children}
    </a>
  );
}

export default Link;
