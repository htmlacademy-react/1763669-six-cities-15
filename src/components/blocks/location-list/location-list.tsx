import { memo, MouseEvent, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../store/use-app-dispatch';
import { changeCity, updateOffers } from '../../../store/action';

import { CityProps, CitiesProps } from './types';

function LocationList({ cities }: { cities: CitiesProps }): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.currentCity);

  const sortTypesRef = useRef<NodeListOf<HTMLElement>>(null);
  const sortTypeRef = useRef<HTMLElement | null>(null);

  const setDefaultSorting = () => {
    if (sortTypesRef.current) {
      sortTypesRef.current.forEach((type) => {
        type.classList.remove('.places__option--active');
      });
      sortTypesRef.current[0].classList.add('.places__option--active');
    }

    if (sortTypeRef.current) {
      sortTypeRef.current.childNodes[0].textContent = 'Popular';
    }

    dispatch(updateOffers());
  };

  const handleLocationListClick = (evt: MouseEvent<HTMLAnchorElement>, cityName: string) => {
    evt.preventDefault();
    dispatch(changeCity({ currentCity: cityName }));
    dispatch(updateOffers());
    setDefaultSorting();
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city: CityProps) => (
        <li className="locations__item" key={ city.name }>
          <Link
            className={classNames([
              'locations__item-link tabs__item',
              city.name === currentCity ? 'tabs__item--active' : '',
            ])}


            to={ city.name }
            onClick={ (evt) => handleLocationListClick(evt, city.name) }
          >
            <span>{ (city.name)[0].toUpperCase() + (city.name).slice(1) }</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

const MemoizedLocationList = memo(LocationList);

export default MemoizedLocationList;

