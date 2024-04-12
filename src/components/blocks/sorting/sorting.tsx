import { memo, useRef, useEffect } from 'react';
import { useAppDispatch } from '../../../store/use-app-dispatch';
import {
  sortOffersPriceHightToLow,
  sortOffersPriceLowToHight,
  sortOffersRating,
  updateOffers,
} from '../../../store/action';

function Sorting(): JSX.Element {
  const sortingListRef = useRef<HTMLUListElement>(null);
  const sortTypeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const sortTypes = sortingListRef.current?.querySelectorAll('.places__option');
    if (sortTypes) {
      sortTypes.forEach((type) => {
        type.classList.remove('places__option--active');
      });
    }
  }, []);

  const dispatch = useAppDispatch();

  const handleSortingListClick = () => {
    if (sortingListRef.current) {
      sortingListRef.current.classList.toggle('places__options--opened');
    }
  };

  const handleSortOffersClick = (evt: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const sortTypes = sortingListRef.current?.querySelectorAll('.places__option');

    if (sortingListRef.current) {
      sortingListRef.current.classList.remove('places__options--opened');
    }

    if (sortTypes) {
      sortTypes.forEach((type) => {
        type.classList.remove('.places__option--active');
      });
    }

    evt.currentTarget.classList.add('.places__option--active');
    if (sortTypeRef.current) {
      sortTypeRef.current.childNodes[0].textContent = evt.currentTarget.textContent;

      switch (sortTypeRef.current.textContent) {
        case 'Price: low to high':
          dispatch(sortOffersPriceLowToHight());
          break;
        case 'Price: high to low':
          dispatch(sortOffersPriceHightToLow());
          break;
        case 'Top rated first':
          dispatch(sortOffersRating());
          break;
        default:
          dispatch(updateOffers());
          break;
      }
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={ 0 }
        onClick={ handleSortingListClick }
        ref={ sortTypeRef }
      >
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className="places__options places__options--custom"
        ref= { sortingListRef }
      >
        <li
          className="places__option places__option--active"
          tabIndex={ 0 }
          onClick={ handleSortOffersClick }
        >
          Popular
        </li>
        <li
          className="places__option"
          tabIndex={ 0 }
          onClick={ handleSortOffersClick }
        >
          Price: low to high
        </li>
        <li
          className="places__option"
          tabIndex={ 0 }
          onClick={ handleSortOffersClick }
        >
          Price: high to low
        </li>
        <li
          className="places__option"
          tabIndex={ 0 }
          onClick={ handleSortOffersClick }
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}

const MemoizedSorting = memo(Sorting);

export default MemoizedSorting;
