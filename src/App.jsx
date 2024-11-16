import './App.css';
import Header from './components/Header/Header';
import SearchSection from './components/SearchSection/SearchSection';
import CardList from './components/CardList/CardList';
import { cards } from './mock/Cards';
import LoginPage from './page/loginPage';

function App() {
  return (
    <>
      <Header></Header>
      <SearchSection isLoginPage={false}></SearchSection>
      <CardList items={cards}></CardList>
      <LoginPage></LoginPage>
    </>
  );
}

export default App;
