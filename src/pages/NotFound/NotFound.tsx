import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '@/models';

const Container = styled.div`
  widht: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  resetErrorBoundary: (...args: Array<unknown>) => void;
};

export const NotFound = ({ resetErrorBoundary }: Props) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Typography align="center" variant="h1" color="gray">
        404 Not Found
        <Typography variant="h5">
          お探しのページが見つかりませんでした。
        </Typography>
        <Link to={PrivateRoutes.HOME} onClick={resetErrorBoundary}>
          {t('Back to home')}
        </Link>
      </Typography>
    </Container>
  );
};

export default NotFound;
