import style from './SectionTitle.module.css';
import Title from '../Title/Title';
import Text from '../Text/Text';
import { ISectionTitleProps } from './SectionTitle.props';

function SectionTitle({ title, text }: ISectionTitleProps) {
  return (
    <div className={style['section-title']}>
      <Title title={title}></Title>
      <Text text={text}></Text>
    </div>
  );
}

export default SectionTitle;
