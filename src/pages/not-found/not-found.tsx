import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../components/consts';

function NotFound(): JSX.Element {
  return(
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: page is not found</title>
      </Helmet>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={ AppRoute.Main }>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main">
        <div className="container">
          <h1>Not Found</h1>
          <Link to={ AppRoute.Main }>Go to homepage</Link>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
