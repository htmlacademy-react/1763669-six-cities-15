import { Link } from 'react-router-dom';

import { CityProps, CitiesProps } from './types';
import classNames from 'classnames';

function LocationList({ cities }: { cities: CitiesProps }): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city: CityProps) => (
        <li className="locations__item" key={ city.id }>
          <Link
            className={classNames([
              'locations__item-link tabs__item',
              //city.isActive && 'tabs__item--active'
            ])}
            to={ city.link }
          >
            <span>{ (city.id)[0].toUpperCase() + (city.id).slice(1) }</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LocationList;
