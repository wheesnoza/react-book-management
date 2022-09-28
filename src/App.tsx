import { Container, LinearProgress, ThemeProvider } from '@mui/material';
import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { Alert, Error, Header } from './components';
import { AuthGuard, GuestGuard, RoleGuard } from './guards';
import { PrivateRoutes, PublicRoutes, Role } from './models';
import store from './redux/store';
import { fetcherService } from './services';
import { appTheme } from './themes';

const Login = lazy(() => import('@/pages/Login/Login'));
const Home = lazy(() => import('@/pages/Home/Home'));
const BookDetail = lazy(() => import('@/pages/Book/Detail/BookDetail'));
const CreateLendPetition = lazy(
  () => import('@/pages/Lend/Create/CreateLendPetition')
);
const ApplicationList = lazy(
  () => import('@/pages/Application/List/ApplicationList')
);
const BookCreate = lazy(() => import('@/pages/Book/Create/BookCreate'));
const BookEdit = lazy(() => import('@/pages/Book/Edit/BookEdit'));
const ProcurePetition = lazy(
  () => import('@/pages/Procure/Create/ProcurePetition')
);
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <SWRConfig
            value={{
              fetcher: fetcherService,
              suspense: true,
            }}
          >
            <Header />
            <Suspense fallback={<LinearProgress />}>
              <Alert />
              <Container maxWidth="lg">
                <ErrorBoundary fallback={<Error />}>
                  <Routes>
                    <Route element={<GuestGuard />}>
                      <Route path={PublicRoutes.LOGIN} element={<Login />} />
                    </Route>
                    <Route element={<AuthGuard />}>
                      <Route path={PrivateRoutes.HOME} element={<Home />} />
                      <Route
                        path={PrivateRoutes.BOOK_PROCURE_PETITION}
                        element={<ProcurePetition />}
                      />
                      <Route
                        path={PrivateRoutes.BOOK_LEND_PETITION}
                        element={<CreateLendPetition />}
                      />
                      <Route
                        path={PrivateRoutes.BOOK_DETAIL}
                        element={<BookDetail />}
                      />
                      <Route
                        element={
                          <RoleGuard
                            allowedRoles={[Role.ADMIN, Role.CORPORATE]}
                          />
                        }
                      >
                        <Route
                          path={PrivateRoutes.BOOK_CREATE}
                          element={<BookCreate />}
                        />
                        <Route
                          path={PrivateRoutes.BOOK_EDIT}
                          element={<BookEdit />}
                        />
                        <Route
                          path={PrivateRoutes.APPLICATIONS}
                          element={<ApplicationList />}
                        />
                      </Route>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </ErrorBoundary>
              </Container>
            </Suspense>
          </SWRConfig>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
