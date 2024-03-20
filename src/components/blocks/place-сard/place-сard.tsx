import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { PlaceCardProps } from './types';
import { AppRoute } from '../../consts';

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const { pathname } = useLocation();

  const previewWidth = pathname === AppRoute.Favorites.toString() ? 150 : 260;
  const previewHeight = pathname === AppRoute.Favorites.toString() ? 110 : 200;

  const [, setActiveCardId] = useState('');

  const showActiveCard = (id: string) => {
    setActiveCardId(id);
  };

  const resetActiveCard = () => {
    setActiveCardId('');
  };

  return (
    <article
      className={classNames([
        'place-card',
        pathname === AppRoute.Main.toString() && 'cities__card',
        pathname.includes('/offer/') && 'near-places__card',
        pathname === AppRoute.Favorites.toString() && 'favorites__card',
      ])}
      onMouseOver={ () => showActiveCard (props.id) }
      onMouseLeave={ () => resetActiveCard() }
    >
      {props.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <Link to={ `offer/${ props.id }` }>
        <div
          className={classNames([
            'place-card__image-wrapper',
            pathname === AppRoute.Main.toString() && 'cities__image-wrapper',
            pathname.includes('/offer/') && 'near-places__image-wrapper',
            pathname === AppRoute.Favorites.toString() && 'favorites__image-wrapper',
          ])}
        >
          <img className="place-card__image" src={ `img/${props.previewImage}.jpg` } width={ previewWidth } height={ previewHeight } alt="Place image" />
        </div>
        <div
          className={classNames([
            'place-card__info',
            pathname === AppRoute.Favorites.toString() && 'favorites__card-info',
          ])}
        >
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{ props.price }</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className={classNames([
                'place-card__bookmark-button',
                'button',
                props.isFavorite && 'place-card__bookmark-button--active'
              ])}
              type="button"
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={ {width: `${Math.round(props.rating) * 20}%`} }></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">{ props.title }</h2>
          <p className="place-card__type">{ props.type.charAt(0).toUpperCase() + props.type.slice(1) }</p>
        </div>
      </Link>
    </article>
  );
}

export default PlaceCard;
