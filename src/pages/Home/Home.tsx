import { Logout } from '@/components';
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';

export const Home = () => {
  const user = useSelector((store: AppStore) => store.user);

  return (
    <>
      <h1>Home</h1>
      <p>{JSON.stringify(user)}</p>
      <Logout />
    </>
  );
};

export default Home;
