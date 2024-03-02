import { PlaceCardsProps } from './types';
import {PlaceCardProps} from '../place-сard/types';
import PlaceCard from '../place-сard/place-сard';

function PlaceCards({cards}: PlaceCardsProps): JSX.Element {
  return (
    <>
      {cards.map((card: PlaceCardProps) => (
        <PlaceCard {...card} key={card.id} />
      ))}
    </>
  );
}

export default PlaceCards;
