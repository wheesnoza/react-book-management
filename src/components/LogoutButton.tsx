import { resetUser } from '@/redux/states/user';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

export const LogoutButton = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleClick = () => {
    dispatch(resetUser());
  };

  return (
    <Button onClick={handleClick} color="inherit">
      {t('logout')}
    </Button>
  );
};

export default LogoutButton;
