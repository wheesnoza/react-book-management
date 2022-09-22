import { resetUser } from '@/redux/states/user';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

export const Logout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetUser());
  };
  return (
    <Button onClick={handleClick} color="inherit">
      Logout
    </Button>
  );
};

export default Logout;
