import {useState} from 'react';
import {Link} from 'react-router-dom';
import {PlaceCardProps} from './types';

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState('');

  const showActiveCard = (id: string) => {
    setActiveCardId(id);
    // console.log('active card:', activeCardId);
    return activeCardId;
  };

  return (
    <article className="cities__card place-card" onMouseOver={() => showActiveCard (props.id)}>
      {props.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={`img/${props.previewImage}.jpg`} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {props.isFavorite ? (
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          ) : (
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          )}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(props.rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={props.id}>{props.title}</Link>
        </h2>
        <p className="place-card__type">{props.type.charAt(0).toUpperCase() + props.type.slice(1)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
