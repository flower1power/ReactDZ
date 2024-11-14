import style from './LoginForm.module.css';
import Input from '../Input/Input';
import Button from '../button/button';
import { useState } from 'react';

function LoginForm({ loginUser }) {
  const [value, setValue] = useState('');

  const onClick = (e) => {
    e.preventDefault();

    loginUser({ name: value, isLogined: true });
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className={style['login-form']}>
      <Input
        placeholder="Ваше имя"
        isSearch={false}
        value={value}
        onChange={handleInputChange}
      />
      <Button text={'Войти в профиль'} onClick={onClick} />
    </form>
  );
}

export default LoginForm;
