import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';

import { AppRoute } from '../../components/consts';
import MemoizedHeader from '../../components/layout/header/header';

function NotFound(): JSX.Element {
  const location = useLocation();

  return(
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: page is not found</title>
      </Helmet>

      <MemoizedHeader location={ location }/>

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
