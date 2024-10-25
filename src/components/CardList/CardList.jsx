import './CardList.css';
import Card from '../Card/Card';

function CardList({ items }) {
  if (items.lenght === 0) {
    return null;
  }

  return (
    <div className="card-list">
      {items.map((el) => (
        <Card
          key={el.id}
          imgPath={el.imgPath}
          name={el.name}
          rang={el.rang}
        ></Card>
      ))}
    </div>
  );
}

export default CardList;