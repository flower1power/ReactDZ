import './SearchSection.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import SearchForm from '../SearchForm/SearchForm';

function SearchSection() {
  return (
    <section className="search-section">
      <SectionTitle
        title={'Поиск'}
        text={
          'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
        }
      ></SectionTitle>
      <SearchForm></SearchForm>
    </section>
  );
}

export default SearchSection;
