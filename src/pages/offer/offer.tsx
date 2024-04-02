import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { useAppSelector } from '../../store/useAppDispatch';
import Reviews from '../../components/blocks/reviews/reviews';
import { reviews } from '../../components/mocks/reviews-data';
import PlaceCards from '../../components/blocks/place-cards/place-cards';
import FormComment from '../../components/blocks/form-comment/form-comment';
import Map from '../../components/blocks/map/map';
import { CITIES } from '../../components/consts';

function Offer(): JSX.Element {
  const { pathname } = useLocation();
  const currentOfferId = pathname.replace('/offer/', '');
  const currentOffer = useAppSelector((state) => state.offers.find((offer) => offer.id === currentOfferId));
  const offersSimilar = useAppSelector((state) => state.offers).filter((offer) => offer.city.name === CITIES[0].id).slice(0, 3);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {/* {currentOffer?.images.map((img) => (
                <div className="offer__image-wrapper" key={img}>
                  <img className="offer__image" src={img} alt="Photo studio" />
                </div>
              ))} */}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer?.isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{ currentOffer?.title }</h1>
                <button
                  className={classNames([
                    'place-card__bookmark-button',
                    'button',
                    currentOffer?.isFavorite && 'place-card__bookmark-button--active'
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
                  <span style={ {width: `${Math.round(4) * 20}%`} }></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{ currentOffer?.rating }</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  { currentOffer?.type }
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer?.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {currentOffer?.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {/* {currentOffer?.goods.map((item) => (
                    <li className="offer__inside-item" key={ item }>{ item.charAt(0).toUpperCase() + item.slice(1) }</li>
                  ))} */}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    {/* <img className="offer__avatar user__avatar" src={ currentOffer?.host.avatarUrl } width="74" height="74" alt="Host avatar" /> */}
                  </div>
                  <span className="offer__user-name">{ currentOffer?.host.name }</span>
                  <span className="offer__user-status">
                    Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviews.length }</span></h2>
                <Reviews items={ reviews } />
                <FormComment />
              </section>
            </div>
          </div>
          <Map city={ CITIES[0] } points={ offersSimilar } activeOfferId={ '1' } />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceCards cards={ offersSimilar } />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
