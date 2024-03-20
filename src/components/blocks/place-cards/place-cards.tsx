import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { PlaceCardsProps } from './types';
import { PlaceCardProps } from '../place-сard/types';
import PlaceCard from '../place-сard/place-сard';
import { AppRoute } from '../../consts';

function PlaceCards({cards}: PlaceCardsProps): JSX.Element {
  const { pathname } = useLocation();

  return (
    <div
      className={classNames([
        'places__list',
        pathname === AppRoute.Main.toString() && 'cities__places-list tabs__content',
        pathname === AppRoute.Offer.toString() && 'near-places__list',
      ])}
    >
      {cards.map((card: PlaceCardProps) => (
        <PlaceCard { ...card } key={ card.id } />
      ))}
    </div>
  );
}

export default PlaceCards;
