import './App.css';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import SearchSection from './components/SearchSection/SearchSection';
import { cards } from './mock/cards';
import LoginPage from './page/LoginPage';

function App() {
  return (
    <>
      <Header></Header>
      <SearchSection></SearchSection>
      <CardList items={cards}></CardList>
      <LoginPage></LoginPage>
    </>
  );
}

export default App;
