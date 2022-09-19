import { Container, LinearProgress } from '@mui/material';
import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthGuard, GuestGuard, RoleGuard } from './guards';
import { PrivateRoutes, PublicRoutes, Role } from './models';
import { Book } from './pages';
import store from './redux/store';

const Login = lazy(() => import('./pages/Login/Login'));
const Home = lazy(() => import('./pages/Home/Home'));
const ApplicationDetail = lazy(
  () => import('./pages/Application/Detail/ApplicationDetail')
);

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
                <Route path={PrivateRoutes.BOOK_DETAIL} element={<Book />} />
                <Route
                  element={
                    <RoleGuard allowedRoles={[Role.ADMIN, Role.CORPORATE]} />
                  }
                >
                  <Route
                    path={PrivateRoutes.APPLICATIONS}
                    element={<ApplicationDetail />}
                  />
                </Route>
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
