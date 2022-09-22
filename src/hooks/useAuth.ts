import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const user = useSelector((store: AppStore) => store.user);

  return {
    user,
  };
};

export default useAuth;
