import './App.css';
import CardList from './components/CardList/CardList';
import SearchSection from './components/SearchSection/SearchSection';
import { cards } from './mock/cards';

function App() {
  return (
    <>
      <SearchSection></SearchSection>
      <CardList items={cards}></CardList>
    </>
  );
}

export default App;
