import style from './SearchForm.module.css';
import Input from '../Input/Input';
import Button from '../button/button';

function SearchForm() {
  return (
    <div className={style['search-form']}>
      <Input placeholder="Введите название" isSearch={true} />
      <Button text={'Искать'} />
    </div>
  );
}

export default SearchForm;
