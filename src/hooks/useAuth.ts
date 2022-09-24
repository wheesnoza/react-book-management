import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';

export const useAuth = () => {
  const user = useSelector((store: AppStore) => store.user);
  const authenticated = !!user.id;

  return {
    user,
    authenticated,
  };
};

export default useAuth;
