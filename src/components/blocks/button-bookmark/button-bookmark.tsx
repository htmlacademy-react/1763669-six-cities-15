import { MouseEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/use-app-dispatch';
import { addFavoriteAction } from '../../../services/api-actions';

import { AuthorizationStatus, AppRoute } from '../../consts';
import { ButtonBookmarkProps } from './types';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

function ButtonBookmark({ id, isFavorite, isOffer = false }: ButtonBookmarkProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleButtonBookmarClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    if (authorizationStatus === AuthorizationStatus.Auth.toString()) {
      const button = evt.currentTarget as HTMLButtonElement;

      button.classList.toggle(isOffer ? 'offer__bookmark-button--active' : 'place-card__bookmark-button--active');
      dispatch(addFavoriteAction({ offerId: id, isFavorite: !isFavorite }));
    } else {
      return navigate(AppRoute.Login);
    }
  };

  const ButtonBookmarkDimensions = {
    offerPage: {
      width: 31,
      height: 33,
    },
    otherPages: {
      width: 18,
      height: 19,
    }
  } as const;

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
      onClick={ handleButtonBookmarClick }
    >
      <svg
        className={classNames([
          !isOffer && 'place-card__bookmark-icon',
          isOffer && 'offer__bookmark-icon',
        ])}
        width={ isOffer ? ButtonBookmarkDimensions.offerPage.width : ButtonBookmarkDimensions.otherPages.width }
        height={ isOffer ? ButtonBookmarkDimensions.offerPage.height : ButtonBookmarkDimensions.otherPages.height }
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}

export default ButtonBookmark;

