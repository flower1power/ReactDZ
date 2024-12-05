import Button from '../Button/Button';
import Input from '../Input/Input';
import style from './SearchForm.module.css';
import { MouseEvent, useState } from 'react';
import { ISearchFormProps } from './SearchForm.props';

function SearchForm({ onSearch }: ISearchFormProps) {
  const [inputValue, setInputValue] = useState('');

  const onClick = (e: MouseEvent) => {
    e.preventDefault();

    onSearch(inputValue);
    setInputValue('');
  };

  const searchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form className={style['search-form']}>
      <Input
        placeholder="Введите название"
        isSearch={true}
        value={inputValue}
        onChange={searchValue}
      />
      <Button text={'Искать'} onClick={onClick} />
    </form>
  );
}

export default SearchForm;
