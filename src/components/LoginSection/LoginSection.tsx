import style from './LoginSection.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import LoginForm from '../LoginForm/LoginForm';

function LoginSection() {
  return (
    <section className={style['login-section']}>
      <SectionTitle title={'Войти'} text={''}></SectionTitle>
      <LoginForm></LoginForm>
    </section>
  );
}

export default LoginSection;
