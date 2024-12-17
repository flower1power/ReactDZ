import style from './LoginForm.module.css';
import Input from '../Input/Input';
import { ChangeEvent, MouseEvent, useState } from 'react';
import Button from '../Button/Button';
import { ILoginFormProps } from './LoginForm.props';
import { useNavigate } from 'react-router';

function LoginForm({ loginUser }: ILoginFormProps) {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const onClick = (e: MouseEvent) => {
    e.preventDefault();

    loginUser({ name: value, isLogined: true });
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
