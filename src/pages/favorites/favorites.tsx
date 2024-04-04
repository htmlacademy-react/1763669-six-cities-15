import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import Footer from '../../components/layout/footer/footer';
import FavoriteOffers from '../../components/blocks/favorite-offers/favorite-offers';
import Header from '../../components/layout/header/header';

function Favorites(): JSX.Element {
  const location = useLocation();

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>

      <Header location={ location }/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteOffers />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Favorites;
