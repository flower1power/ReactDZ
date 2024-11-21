import { useContext } from 'react';
import { UserContext } from '../context/users.context';
import Header from '../components/Header/Header';
import LoginSection from '../components/LoginSection/LoginSection';

function LoginPage() {
  const { loginUser } = useContext(UserContext);

  return (
    <>
      <Header></Header>
      <LoginSection loginUser={loginUser}></LoginSection>
    </>
  );
}

export default LoginPage;
