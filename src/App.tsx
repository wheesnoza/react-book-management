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
    <Suspense fallback={<h1>Loading...</h1>}>
      <Provider store={store}>
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
      </Provider>
    </Suspense>
  );
}

export default App;
