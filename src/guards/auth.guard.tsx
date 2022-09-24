import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { PublicRoutes } from '@/models';
import { AppStore } from '@/redux/store';

export const AuthGuard = () => {
  const user = useSelector((state: AppStore) => state.user);

  return user.id ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
};

export default AuthGuard;
