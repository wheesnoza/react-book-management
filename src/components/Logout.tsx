import { resetUser } from '@/redux/states/user';
import { useDispatch } from 'react-redux';

export const Logout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetUser());
  };
  return <button onClick={handleClick}>Logout</button>;
};

export default Logout;
