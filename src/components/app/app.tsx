import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useAppSelector } from '../../store/use-app-dispatch';

import { AppRoute, AuthorizationStatus } from '../consts';
import PrivateRoute from '../blocks/private-route/private-route';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import Spinner from '../blocks/spinner/spinner';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus) as AuthorizationStatus;
  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isDataLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={ AppRoute.Main }
            element={ <Main /> }
          />
          <Route
            path={ AppRoute.Login }
            element={ <Login /> }
          />
          <Route
            path={ AppRoute.Favorites }
            element={
              <PrivateRoute authorizationStatus={ authorizationStatus }>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route
            path={ AppRoute.Offer }
            element={ <Offer /> }
          />
          <Route
            path='*'
            element={ <NotFound /> }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
