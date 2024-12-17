import { useContext } from 'react';
import LoginSection from '../../components/LoginSection/LoginSection';
import { UserContext } from '../../context/users.context';

function LoginPage() {
  const { loginUser } = useContext(UserContext);

  return (
    <>
      <LoginSection loginUser={loginUser}></LoginSection>
    </>
  );
}

export default LoginPage;
