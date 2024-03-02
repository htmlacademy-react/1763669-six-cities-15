import PlaceCard from '../place-сard/place-сard';

export type PlaceCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  isFavorite?: boolean;
  isPremium?: boolean;
  rating: number;
  previewImage: string;
};

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
