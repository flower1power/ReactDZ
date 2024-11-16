import style from './SearchForm.module.css';
import Input from '../Input/Input';
import Button from '../button/button';

function SearchForm() {
  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <form className={style['search-form']}>
      <Input placeholder="Введите название" isSearch={true} />
      <Button text={'Искать'} onClick={onClick} />
    </form>
  );
}

export default SearchForm;
