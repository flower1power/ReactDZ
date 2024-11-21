import Button from '../Button/Button';
import Input from '../Input/Input';
import style from './SearchForm.module.css';
import { MouseEvent } from 'react';

function SearchForm() {
  const onClick = (e: MouseEvent) => {
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
