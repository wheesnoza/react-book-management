import { Role } from '@/models';
import { createUser } from '@/redux/states/user';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

export const LoginButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      createUser({
        id: 1,
        email: 'test@test.example',
        name: 'Bon Jovi',
        role: Role.ADMIN,
      })
    );
  };

  return (
    <Button onClick={handleClick} color="inherit">
      Login
    </Button>
  );
};

export default LoginButton;
