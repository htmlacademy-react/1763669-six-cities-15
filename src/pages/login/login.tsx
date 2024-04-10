import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useLocation } from 'react-router-dom';

import MemoizedHeader from '../../components/layout/header/header';
import FormLogin from '../../components/blocks/form-login/form-login';
import { AuthorizationStatus, AppRoute } from '../../components/consts';
import { useAppSelector } from '../../store/useAppDispatch';

function Login(): JSX.Element {
  const location = useLocation();

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus) as AuthorizationStatus;
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>

      <MemoizedHeader location={ location }/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <FormLogin />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={ AppRoute.Main }>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
