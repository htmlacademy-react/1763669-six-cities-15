import PlaceCard from '../place-сard/place-сard';
import { cardsFavorites } from '../../mocks/place-card-data';

function FavoriteOffers () {
  const favoriteOffersCards = cardsFavorites.filter((card) => card.isFavorite);
  const favoriteOffersCityNames = favoriteOffersCards.reduce((cityList: string[], currentCard) => {
    if (!(cityList.includes(currentCard.city.name))) {
      cityList.push(currentCard.city.name);
    }

    return cityList;
  }, []);

  return (
    <ul className="favorites__list">
      {
        favoriteOffersCityNames.map((cityName: string) => (
          <li className="favorites__locations-items" key = {cityName}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{cityName}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {
                cardsFavorites.map((card) => {
                  if (card.city.name === cityName) {
                    return <PlaceCard {...card} key={card.id} />;
                  }
                })
              }
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default FavoriteOffers;
