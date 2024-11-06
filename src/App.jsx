import './App.css';
import Header from './components/Header/Header';
import SearchSection from './components/SearchSection/SearchSection';
import CardList from './components/CardList/CardList';
import { cards } from './mock/Cards';

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
