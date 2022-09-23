import { Container, LinearProgress, ThemeProvider } from '@mui/material';
import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { AuthGuard, GuestGuard, RoleGuard } from './guards';
import { PrivateRoutes, PublicRoutes, Role } from './models';
import { Book } from './pages';
import store from './redux/store';
import { appTheme } from './themes';

const Login = lazy(() => import('./pages/Login/Login'));
const Home = lazy(() => import('./pages/Home/Home'));
const ApplicationList = lazy(
  () => import('./pages/Application/List/ApplicationList')
);

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Provider store={store}>
        <Suspense fallback={<LinearProgress />}>
          <BrowserRouter>
            <Header />
            <Container maxWidth="lg">
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
                      element={<ApplicationList />}
                    />
                  </Route>
                </Route>
                <Route path="*" element={<>NOT FOUND</>} />
              </Routes>
            </Container>
          </BrowserRouter>
        </Suspense>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
