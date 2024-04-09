import { memo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../store/useAppDispatch';

import { AuthorizationStatus } from '../../consts';
import { addFavorite } from '../../../services/api-actions';
import { MouseEvent } from 'react';

import { PlaceCardProps } from './types';
import { showActiveCard } from '../../../store/action';
import { capitalizeFirstLetter, setInlineWidth, isMainPage, isOfferPage, isFavoritesPage } from '../../utils';

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const previewWidth = isFavoritesPage(pathname) ? 150 : 260;
  const previewHeight = isFavoritesPage(pathname) ? 110 : 200;
  const setInlineWidthMemoized = useCallback((num: number) => setInlineWidth(num), []);

  const handleFavoriteButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    const button = evt.target as HTMLButtonElement;

    if (authorizationStatus === AuthorizationStatus.Auth.toString()) {
      button.classList.toggle('place-card__bookmark-button--active');
      dispatch(addFavorite({ id: props.id, isFavorite: !props.isFavorite }));
    }
  };

  return (
    <article
      className={classNames([
        'place-card',
        isMainPage(pathname) && 'cities__card',
        isOfferPage(pathname) && 'near-places__card',
        isFavoritesPage(pathname) && 'favorites__card',
      ])}
      onMouseOver={ () => dispatch(showActiveCard({ activeOfferId: props.id })) }
      onMouseLeave={ () => dispatch(showActiveCard({ activeOfferId: '' })) }
    >
      {
        props.isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
      }
      <Link to={ `/offer/${ props.id }` }>
        <div
          className={classNames([
            'place-card__image-wrapper',
            isMainPage(pathname) && 'cities__image-wrapper',
            isOfferPage(pathname) && 'near-places__image-wrapper',
            isFavoritesPage(pathname) && 'favorites__image-wrapper',
          ])}
        >
          <img className="place-card__image" src={ props.previewImage } width={ previewWidth } height={ previewHeight } alt="Place image" />
        </div>
      </Link>
      <div
        className={classNames([
          'place-card__info',
          isFavoritesPage(pathname) && 'favorites__card-info',
        ])}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ props.price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={classNames([
              'button',
              isMainPage(pathname) || isFavoritesPage(pathname) && 'place-card__bookmark-button',
              isOfferPage(pathname) && 'offer__bookmark-button',
              props.isFavorite && 'place-card__bookmark-button--active',
            ])}
            type="button"
            onClick={ handleFavoriteButtonClick }
          >
            <svg
              className={classNames([
                isMainPage(pathname) || isFavoritesPage(pathname) && 'place-card__bookmark-icon',
                isOfferPage(pathname) && 'offer__bookmark-icon',
              ])}
              width="18"
              height="19"
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ setInlineWidthMemoized(props.rating) }></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <Link to={ `/offer/${ props.id }` }>
          <h2 className="place-card__name">{ props.title }</h2>
        </Link>
        <p className="place-card__type">{ capitalizeFirstLetter(props.type) }</p>
      </div>
    </article>
  );
}

const MemoizedPlaceCard = memo(PlaceCard);

export default MemoizedPlaceCard;
