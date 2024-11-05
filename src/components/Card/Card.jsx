import './Card.css';
import Link from '../Link/Link';
import Rang from '../Rang/Rang';
import Button from '../button/button';

function Card({ imgPath, name, rang }) {
  return (
    <div className="card">
      <Rang text={rang}></Rang>
      <div className="card-img-wrapper">
        <img className="card-img" src={imgPath} alt="Постер Фильма"></img>
      </div>
      <div className="card-footer">
        <Link className="card-link" text={name} isActive={true}></Link>
        <Button className={'card-button'} text={'В избранное'}>
          <img src="/src/public/like.svg"></img>
        </Button>
      </div>
    </div>
  );
}

export default Card;
