import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutes } from '@/models';
import { AppStore } from '@/redux/store';

export const GuestGuard = () => {
  const user = useSelector((state: AppStore) => state.user);

  return user.id ? <Navigate replace to={PrivateRoutes.HOME} /> : <Outlet />;
};

export default GuestGuard;
