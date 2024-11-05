import './Input.css';

function Input({ isSearch, placeholder }) {
  return (
    <div className="input-container">
      {isSearch ? (
        <img
          src="/src/public/search2.svg"
          alt="Картинка поиска"
          className="input-icon"
        />
      ) : null}
      <input className="input" placeholder={placeholder} />
    </div>
  );
}

export default Input;
