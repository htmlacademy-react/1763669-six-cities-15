import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/use-app-dispatch';

import { fetchFavoritesAction } from '../../services/api-actions';
import MemoizedHeader from '../../components/layout/header/header';
import FavoriteOffers from '../../components/blocks/favorite-offers/favorite-offers';
import Footer from '../../components/layout/footer/footer';

function Favorites(): JSX.Element {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  },[dispatch]
  );

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>

      <MemoizedHeader location={ location }/>

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
