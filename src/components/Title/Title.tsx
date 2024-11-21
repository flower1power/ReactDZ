import './Title.module.css';
import { ITitleProps } from './Title.props';

function Title({ title }: ITitleProps) {
  return <h1>{title}</h1>;
}

export default Title;
