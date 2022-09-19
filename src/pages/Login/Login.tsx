import { Role } from '@/models';
import { createUser } from '@/redux/states/user';
import { AppStore } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {
  const user = useSelector((store: AppStore) => store.user);
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
      <span>{!!user.id && JSON.stringify(user)}</span>
      <button onClick={handleClick}>Login</button>
    </>
  );
};

export default Login;
