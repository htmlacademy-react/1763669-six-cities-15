import { PlaceCardProps } from '../place-сard/place-сard';
import PlaceCard from '../place-сard/place-сard';


export type PlaceCardsProps = {
  cards: PlaceCardProps[];
};

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
