import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/models';

const Container = styled.div`
  widht: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Container>
      <Typography align="center" variant="h1" color="gray">
        404 Not Found
        <Typography variant="h5">
          お探しのページが見つかりませんでした。
        </Typography>
        <Button size="large" onClick={() => navigate(PrivateRoutes.HOME)}>
          {t('home')}へ戻る
        </Button>
      </Typography>
    </Container>
  );
};

export default NotFound;
