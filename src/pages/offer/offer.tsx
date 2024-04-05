import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { fetchNearPlaces, fetchOffer, fetchReviews } from '../../services/api-actions';
import { useAppSelector } from '../../store/useAppDispatch';

import Reviews from '../../components/blocks/reviews/reviews';
import PlaceCards from '../../components/blocks/place-cards/place-cards';
import FormComment from '../../components/blocks/form-comment/form-comment';
import Map from '../../components/blocks/map/map';
import Header from '../../components/layout/header/header';
import { store } from '../../store/store';
import { initialMapData } from '../../components/blocks/map/types';
import { AuthorizationStatus } from '../../components/consts';

function Offer(): JSX.Element {
  const location = useLocation();

  const params = useParams();
  const offerId = params.id || '';
  const activeOffer = useAppSelector((state) => state.activeOffer);

  useEffect(() => {
    store.dispatch(fetchOffer(offerId));
    store.dispatch(fetchNearPlaces(offerId));
    store.dispatch(fetchReviews(offerId));
  }, [offerId]);

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const nearPlaces = useAppSelector((state) => state.nearPlaces);
  const reviews = useAppSelector((state) => state.reviews);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>

      <Header location={ location }/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                activeOffer?.images.map((img) => (
                  <div className="offer__image-wrapper" key={ img }>
                    <img className="offer__image" src={ img } alt="Photo studio" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                activeOffer?.isPremium &&
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
              }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{ activeOffer?.title }</h1>
                <button
                  className={classNames([
                    'place-card__bookmark-button',
                    'button',
                    activeOffer?.isFavorite && 'place-card__bookmark-button--active'
                  ])}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={ {width: `${Math.round(activeOffer?.rating || 0) * 20}%`} }></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{ activeOffer?.rating }</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  { activeOffer?.type }
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  { activeOffer?.bedrooms } Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max { activeOffer?.maxAdults } adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{ activeOffer?.price }</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    activeOffer?.goods.map((item) => (
                      <li className="offer__inside-item" key={ item }>{ item.charAt(0).toUpperCase() + item.slice(1) }</li>
                    ))
                  }
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={ activeOffer?.host.avatarUrl } width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">{ activeOffer?.host.name }</span>
                  <span className="offer__user-status">
                    Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">{ activeOffer?.description }</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviews ? reviews.length : 0 }</span></h2>
                <Reviews items={ reviews ? reviews : [] } />
                {
                  authorizationStatus === AuthorizationStatus.Auth.toString() &&
                    <FormComment />
                }
              </section>
            </div>
          </div>
          {
            nearPlaces &&
              <Map city={ activeOffer?.city || initialMapData } points={ nearPlaces.slice(0, 3) } activeOfferId={ '' } />
          }
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceCards cards={ nearPlaces ? nearPlaces.slice(0, 3) : [] } />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
