import { resetUser } from '@/redux/states/user';
import { AppStore } from '@/redux/store';
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
      <span>{JSON.stringify(user)}</span>
      <button onClick={handleClick}>Logout</button>
    </>
  );
};

export default Home;
