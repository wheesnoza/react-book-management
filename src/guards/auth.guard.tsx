import { PublicRoutes } from '@/models';
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = () => {
  const user = useSelector((state: AppStore) => state.user);

  return user.id ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
};

export default AuthGuard;
