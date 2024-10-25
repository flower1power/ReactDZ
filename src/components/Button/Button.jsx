import './Button.css';

function Button({ text, className, children }) {
  return (
    <button className={`button ${className ? className : null}`}>
      {children}
      {text}
    </button>
  );
}

export default Button;
