import './SearchForm.css';
import Input from '../Input/Input';
import Button from '../button/button';

function SearchForm() {
  return (
    <div className="search-form">
      <Input placeholder="Введите название" isSearch={true} />
      <Button text={'Искать'} />
    </div>
  );
}

export default SearchForm;
