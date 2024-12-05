import './Text.module.css';
import { ITextProps } from './Text.props';

function Text({ text }: ITextProps) {
  return <p>{text}</p>;
}

export default Text;
