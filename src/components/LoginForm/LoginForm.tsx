import style from './LoginForm.module.css';
import Input from '../Input/Input';
import { ChangeEvent, MouseEvent, useState } from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { TAppDispathe } from '../../store/store';
import { loginUser } from '../../store/user.slice';

function LoginForm() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch<TAppDispathe>();

  const onClick = (e: MouseEvent) => {
    e.preventDefault();


    const newUser = { name: value, isLogined: true, items: [] };
    dispatch(loginUser(newUser));

    setValue('');
    navigate('/');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
