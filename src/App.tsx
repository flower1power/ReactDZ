import { useState } from 'react';
import CardList from './components/CardList/CardList';
import SearchSection from './components/SearchSection/SearchSection';
import axios, { AxiosError } from 'axios';
import { PREFIX } from './utils/api.constats';
import { ErrorPage } from './page/ErrorPage/ErrorPage';
import { ISearch, ISearchDescription } from './inteface/search.interfase';

function App() {
  const [cards, setCards] = useState<ISearchDescription[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const searchFilms = async (searchValue: string) => {
    try {
      setIsLoading(true);
      setError(undefined);

      const { data }: { data: ISearch } = await axios.get(
        `${PREFIX}/?q=${searchValue}`,
      );
      setCards(data.description);

      setIsEmpty(data.description.length === 0);
    } catch (e) {
      console.error(e);

      if (e instanceof AxiosError) {
        setError(e.message);
        setIsLoading(false);
        return;
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchSection onSearch={searchFilms}></SearchSection>
      {isLoading && (
        <h1 style={{ color: '#fff', textAlign: 'center' }}>Идет поиск...</h1>
      )}
      {!isLoading && isEmpty === false && <CardList items={cards}></CardList>}
      {!isLoading && isEmpty === true && <ErrorPage />}

      {error && <p style={{ color: '#fff', textAlign: 'center' }}>{error}</p>}
    </>
  );
}

export default App;
