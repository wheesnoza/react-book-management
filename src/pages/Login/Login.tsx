import { Role } from '@/models';
import { createUser } from '@/redux/states/user';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      createUser({
        id: 1,
        email: 'test@test.example',
        name: 'Bon Jovi',
        role: Role.EMPLOYEE,
      })
    );
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </>
  );
};

export default Login;
