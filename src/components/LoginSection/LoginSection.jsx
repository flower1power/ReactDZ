import style from './LoginSection.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import LoginForm from '../LoginForm/LoginForm';

function LoginSection({ loginUser }) {
  return (
    <section className={style['login-section']}>
      <SectionTitle title={'Войти'}></SectionTitle>
      <LoginForm loginUser={loginUser}></LoginForm>
    </section>
  );
}

export default LoginSection;
