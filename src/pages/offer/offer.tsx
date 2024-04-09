import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useParams } from 'react-router-dom';
import { fetchNearPlacesAction, fetchOfferAction, fetchReviewsAction } from '../../services/api-actions';
import { useAppSelector } from '../../store/useAppDispatch';

import MemoizedHeader from '../../components/layout/header/header';
import MemoizedPlaceCards from '../../components/blocks/place-cards/place-cards';
import { store } from '../../store/store';
import MemoizedFullOffer from '../../components/blocks/full-offer/full-offer';

function Offer(): JSX.Element {
  const location = useLocation();

  const params = useParams();
  const offerId = params.id || '';

  useEffect(() => {
    store.dispatch(fetchOfferAction(offerId));
    store.dispatch(fetchNearPlacesAction(offerId));
    store.dispatch(fetchReviewsAction(offerId));
  }, [offerId]);

  const nearPlaces = useAppSelector((state) => state.nearPlaces);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>

      <MemoizedHeader location={ location }/>

      <main className="page__main page__main--offer">
        <MemoizedFullOffer />
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <MemoizedPlaceCards cards={ nearPlaces ? nearPlaces : [] } />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
