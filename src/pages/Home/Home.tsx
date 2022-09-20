import { resetUser } from '@/redux/states/user';
import { AppStore } from '@/redux/store';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((store: AppStore) => store.user);

  const handleClick = () => {
    dispatch(resetUser());
  };

  return (
    <>
      <h1>Home</h1>
      <p>{JSON.stringify(user)}</p>
      <Button onClick={handleClick} variant="contained">
        Logout
      </Button>
    </>
  );
};

export default Home;
