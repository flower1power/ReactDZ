import './SectionTitle.css';
import Title from '../Title/Title';
import Text from '../Text/Text';

function SectionTitle({ title, text }) {
  return (
    <div className="section-title">
      <Title title={title}></Title>
      <Text text={text}></Text>
    </div>
  );
}

export default SectionTitle;
