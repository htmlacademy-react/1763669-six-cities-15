import { memo, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../store/use-app-dispatch';
import { changeCity, updateOffers, sortOffersPopular } from '../../../store/action';

import { CityProps, CitiesProps } from './types';

function LocationList({ cities }: { cities: CitiesProps }): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.currentCity);

  const setDefaultSorting = () => {
    const sortTypes = document.querySelectorAll('.places__option');
    const sortType = document.querySelector('.places__sorting-type');

    sortTypes.forEach((type) => {
      type.classList.remove('.places__option--active');
    });
    sortTypes[0].classList.add('.places__option--active');

    if (sortType) {
      sortType.childNodes[0].textContent = 'Popular';
    }

    dispatch(sortOffersPopular());
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
