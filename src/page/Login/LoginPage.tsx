import { useContext } from 'react';
import LoginSection from '../../components/LoginSection/LoginSection';
// import Header from '../../components/Header/Header';
import { UserContext } from '../../context/users.context';

function LoginPage() {
  const { loginUser } = useContext(UserContext);

  return (
    <>
      {/* <Header></Header> */}
      <LoginSection loginUser={loginUser}></LoginSection>
    </>
  );
}

export default LoginPage;
