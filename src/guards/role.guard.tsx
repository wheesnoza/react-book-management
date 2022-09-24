import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Role } from '@/models';
import { AppStore } from '@/redux/store';

interface Props {
  allowedRoles: Role[];
}

export const RoleGuard = ({ allowedRoles }: Props) => {
  const { role } = useSelector((store: AppStore) => store.user);

  return allowedRoles.includes(role) ? <Outlet /> : <>Forbidden</>;
};

export default RoleGuard;
