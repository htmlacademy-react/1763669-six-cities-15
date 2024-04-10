import { useCallback, memo } from 'react';
import { useAppSelector } from '../../../store/use-app-dispatch';

import { AuthorizationStatus, CITIES } from '../../consts';
import Map from '../map/map';
import FormComment from '../form-comment/form-comment';
import Reviews from '../reviews/reviews';
import { setInlineWidth, capitalizeFirstLetter } from '../../utils';
import ButtonBookmark from '../button-bookmark/button-bookmark';
import { ReviewProps } from '../review/types';
import { PlaceCardProps } from '../place-сard/types';
import classNames from 'classnames';

function FullOffer(): JSX.Element {
  const activeOffer = useAppSelector((state) => state.activeOffer);
  let selectedCityId = -1;
  selectedCityId = CITIES.findIndex((city) => city.name === activeOffer?.city.name);

  const reviews = useAppSelector((state) => state.reviews);
  let finalReviews: ReviewProps[] = [];

  if (reviews) {
    const sortedReviews = [...reviews].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    finalReviews = sortedReviews.slice(0, 10);
  }

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const nearPlaces = [...useAppSelector((state) => state.nearPlaces) || [], activeOffer];
  //const updatedNearPlaces = [...(nearPlaces || []), activeOffer];
  const activeOfferId = useAppSelector((state) => state.activeOfferId);

  const setInlineWidthMemoized = useCallback((num: number) => setInlineWidth(num), []);


  return (
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
            <ButtonBookmark
              id={ activeOffer?.id || ''}
              isFavorite={ activeOffer?.isFavorite || false}
              isOffer={ activeOffer ? true : undefined }
            />
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={ setInlineWidthMemoized(activeOffer?.rating || 0) }></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{ activeOffer?.rating }</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              { capitalizeFirstLetter(activeOffer?.type || '') }
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {
                Number(activeOffer?.bedrooms) === 1 ?
                  `${ activeOffer?.bedrooms } Bedroom` :
                  `${ activeOffer?.bedrooms } Bedrooms`
              }
            </li>
            <li className="offer__feature offer__feature--adults">
              {
                Number(activeOffer?.maxAdults) === 1 ?
                  `Max ${ activeOffer?.maxAdults } adult` :
                  `Max ${ activeOffer?.maxAdults } adults`
              }
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
                  <li className="offer__inside-item" key={ item }>{ capitalizeFirstLetter(item) }</li>
                ))
              }
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div
                className={classNames([
                  'offer__avatar-wrapper',
                  'user__avatar-wrapper',
                  activeOffer?.host.isPro && 'offer__avatar-wrapper--pro',
                ])}
              >
                <img className="offer__avatar user__avatar" src={ activeOffer?.host.avatarUrl } width="74" height="74" alt="Host avatar" />
              </div>
              <span className="offer__user-name">{ activeOffer?.host.name }</span>
              {
                activeOffer?.host.isPro &&
                  <span className="offer__user-status">Pro</span>
              }
            </div>
            <div className="offer__description">
              <p className="offer__text">{ activeOffer?.description }</p>
            </div>
          </div>
          <section className="offer__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviews ? reviews.length : 0 }</span></h2>
            <Reviews items={ finalReviews ? finalReviews : [] } />
            {
              authorizationStatus === AuthorizationStatus.Auth.toString() &&
                <FormComment />
            }
          </section>
        </div>
      </div>
      {
        nearPlaces && activeOffer && activeOffer.city &&
          <Map city={ CITIES[selectedCityId] } points={ nearPlaces as PlaceCardProps[] } activeOfferId={ activeOfferId || activeOffer.id } />
      }
    </section>
  );
}

const MemoizedFullOffer = memo(FullOffer);

export default MemoizedFullOffer;
