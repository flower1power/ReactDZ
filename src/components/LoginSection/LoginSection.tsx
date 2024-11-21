import style from './LoginSection.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import LoginForm from '../LoginForm/LoginForm';
import { ILoginSectionProps } from './LoginSection.props';

function LoginSection({ loginUser }: ILoginSectionProps) {
  return (
    <section className={style['login-section']}>
      <SectionTitle title={'Войти'} text={''}></SectionTitle>
      <LoginForm loginUser={loginUser}></LoginForm>
    </section>
  );
}

export default LoginSection;
