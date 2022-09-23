import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const user = useSelector((store: AppStore) => store.user);
  const authenticated = !!user.id;

  return {
    user,
    authenticated,
  };
};

export default useAuth;
