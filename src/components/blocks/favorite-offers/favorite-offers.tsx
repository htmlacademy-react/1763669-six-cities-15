import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/use-app-dispatch';

import MemoizedPlaceCard from '../place-сard/place-сard';

function FavoriteOffers () {
  const favoriteOffers = useAppSelector((state) => state.favorites);
  const favoriteOffersCityNames = favoriteOffers ?
    favoriteOffers.reduce((cityList: string[], currentOffer) => {
      if (!cityList.includes(currentOffer.city.name)) {
        cityList.push(currentOffer.city.name);
      }
      return cityList;
    }, []) : [];

  return (
    <ul className="favorites__list">
      {
        favoriteOffersCityNames.map((cityName: string) => (
          <li className="favorites__locations-items" key = {cityName}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to="#">
                  <span>{ cityName }</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {
                favoriteOffers?.map((offer) => {
                  if (offer.city.name === cityName) {
                    return <MemoizedPlaceCard { ...offer } key={ offer.id } />;
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
