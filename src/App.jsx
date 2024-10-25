import './App.css';
import Header from './components/Header/Header';
import SearchSection from './components/SearchSection/SearchSection';
import CardList from './components/CardList/CardList';

const cards = [
  {
    id: 1,
    imgPath: '../src/public/BlackWindow.svg',
    name: 'Black Widow',
    rang: 324,
  },
  {
    id: 2,
    imgPath: '../src/public/BlackWindow.svg',
    name: 'Black Widow',
    rang: 324,
  },
  {
    id: 3,
    imgPath: '../src/public/BlackWindow.svg',
    name: 'Black Widow',
    rang: 324,
  },
  {
    id: 4,
    imgPath: '../src/public/BlackWindow.svg',
    name: 'Black Widow',
    rang: 324,
  },
  {
    id: 5,
    imgPath: '../src/public/BlackWindow.svg',
    name: 'Black Widow',
    rang: 324,
  },
  {
    id: 6,
    imgPath: '../src/public/BlackWindow.svg',
    name: 'Black Widow',
    rang: 324,
  },
];

function App() {
  return (
    <>
      <Header></Header>
      <SearchSection></SearchSection>
      <CardList items={cards}></CardList>
    </>
  );
}

export default App;
