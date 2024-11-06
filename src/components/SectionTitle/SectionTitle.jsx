import style from './SectionTitle.module.css';
import Title from '../Title/Title';
import Text from '../Text/Text';

function SectionTitle({ title, text }) {
  return (
    <div className={style['section-title']}>
      <Title title={title}></Title>
      <Text text={text}></Text>
    </div>
  );
}

export default SectionTitle;
