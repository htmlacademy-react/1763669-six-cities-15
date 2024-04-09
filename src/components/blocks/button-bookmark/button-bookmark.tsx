import { MouseEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/useAppDispatch';
import { addFavorite } from '../../../services/api-actions';

import { AuthorizationStatus } from '../../consts';
import { ButtonBookmarkProps } from './types';
import classNames from 'classnames';

function ButtonBookmark({ id, isFavorite, isOffer = false }: ButtonBookmarkProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  const handleFavoriteButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    const button = evt.currentTarget as HTMLButtonElement;

    if (authorizationStatus === AuthorizationStatus.Auth.toString()) {
      button.classList.toggle(isOffer ? 'offer__bookmark-button--active' : 'place-card__bookmark-button--active');
      dispatch(addFavorite({ id: id, isFavorite: !isFavorite }));
    }
  };

  return (
    <button
      className={classNames([
        'button',
        !isOffer && 'place-card__bookmark-button',
        (!isOffer && isFavorite) && 'place-card__bookmark-button--active',
        isOffer && 'offer__bookmark-button',
        (isOffer && isFavorite) && 'offer__bookmark-button--active',
      ])}
      type="button"
      onClick={ handleFavoriteButtonClick }
    >
      <svg
        className={classNames([
          !isOffer && 'place-card__bookmark-icon',
          isOffer && 'offer__bookmark-icon',
        ])}
        width={ isOffer ? '31' : '18' }
        height={ isOffer ? '33' : '19' }
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}

export default ButtonBookmark;

