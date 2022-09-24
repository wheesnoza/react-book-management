import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { createUser } from '@/redux/states/user';
import { Role } from '@/models';

export const LoginButton = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleClick = () => {
    dispatch(
      createUser({
        id: 1,
        email: 'test@test.example',
        name: 'Bon Jovi',
        role: Role.ADMIN,
      })
    );
  };

  return (
    <Button onClick={handleClick} color="inherit">
      {t('login')}
    </Button>
  );
};

export default LoginButton;
