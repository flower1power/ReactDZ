import style from './SearchSection.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import SearchForm from '../SearchForm/SearchForm';
import { ISearchSectionProps } from './SearchSection.props';

function SearchSection({ onSearch }: ISearchSectionProps) {
  return (
    <section className={style['search-section']}>
      <SectionTitle
        title={'Поиск'}
        text={
          'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
        }
      ></SectionTitle>
      <SearchForm onSearch={onSearch}></SearchForm>
    </section>
  );
}

export default SearchSection;
