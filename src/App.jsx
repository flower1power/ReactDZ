import './App.css';
import Button from './components/button/button';
import Title from './components/Title/Title';
import Text from './components/Text/Text';

function App() {
  return (
    <>
      <Title text={'Поиск'} />
      <Text
        text={
          'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
        }
      ></Text>
      <Button text={'Искать'} />
    </>
  );
}

export default App;
