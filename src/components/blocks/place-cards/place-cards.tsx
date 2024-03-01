import { PlaceCardProps } from '../place-сard/place-сard';
import PlaceCard from '../place-сard/place-сard';


export type PlaceCardsProps = PlaceCardProps[];

function PlaceCards(cardsList: PlaceCardsProps): JSX.Element {
  return (
    <>
      {cardsList.map((card: PlaceCardProps) => (
        <PlaceCard
          key={card.id}
          id={card.id}
          img={card.img}
          isPremium={card.isPremium}
          price={card.price}
          title={card.title}
          housingType={card.housingType}
          isFavorite={card.isFavorite}
          rating={card.rating}
        />
      ))}
    </>
  );
}

export default PlaceCards;
