import { Link } from 'react-router-dom';

import { CityProps, CitiesProps } from './types';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../store/useAppDispatch';
import { changeCity, updateOffers } from '../../store/action';

function LocationList({ cities }: { cities: CitiesProps }): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.currentCity);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city: CityProps) => (
        <li className="locations__item" key={ city.id }>
          <Link
            className={classNames([
              'locations__item-link tabs__item',
              { 'tabs__item--active': city.id === currentCity }
            ])}
            to={ city.link }
            onClick={
              (evt) => {
                evt.preventDefault();
                dispatch(changeCity({ currentCity: city.id }));
                dispatch(updateOffers());
              }
            }
          >
            <span>{ (city.id)[0].toUpperCase() + (city.id).slice(1) }</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LocationList;
