import './Rang.css';

function Rang({ text }) {
  return (
    <div className="rang">
      <img src="/src/public/star.svg" alt="Звезда"></img>
      {text}
    </div>
  );
}

export default Rang;
