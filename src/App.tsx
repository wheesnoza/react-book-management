import { Container, LinearProgress } from '@mui/material';
import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthGuard, GuestGuard } from './guards';
import { PrivateRoutes, PublicRoutes } from './models';
import store from './redux/store';

const Login = lazy(() => import('./pages/Login/Login'));
const Home = lazy(() => import('./pages/Home/Home'));

function App() {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Provider store={store}>
        <Container maxWidth="lg">
          <BrowserRouter>
            <Routes>
              <Route element={<GuestGuard />}>
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
              </Route>
              <Route element={<AuthGuard />}>
                <Route path={PrivateRoutes.HOME} element={<Home />} />
              </Route>
              <Route path="*" element={<>NOT FOUND</>} />
            </Routes>
          </BrowserRouter>
        </Container>
      </Provider>
    </Suspense>
  );
}

export default App;
