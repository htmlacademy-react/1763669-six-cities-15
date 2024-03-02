import {PrivateRouteProps} from './types';
import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {
  return(
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
