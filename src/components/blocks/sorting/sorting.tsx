import { useAppDispatch } from '../../../store/useAppDispatch';
import {
  sortOffersPriceHightToLow,
  sortOffersPriceLowToHight,
  sortOffersRating,
  updateOffers
} from '../../../store/action';

function Sorting(): JSX.Element {
  const sortingList = document.querySelector('.places__options');
  const sortTypes = document.querySelectorAll('.places__option');
  const sortType = document.querySelector('.places__sorting-type');

  const dispatch = useAppDispatch();

  const openSortingList = () => {
    if (sortingList) {
      sortingList.classList.toggle('places__options--opened');
    }
  };

  const sortOffers = (evt: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (sortingList) {
      sortingList.classList.remove('places__options--opened');
    }

    sortTypes.forEach((type) => {
      type.classList.remove('.places__option--active');
    });

    evt.currentTarget.classList.add('.places__option--active');
    if (sortType) {
      sortType.childNodes[0].textContent = evt.currentTarget.textContent;

      switch (sortType.textContent) {
        case 'Popular':
          dispatch(updateOffers());
          break;
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
          break;
      }
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={ 0 } onClick={ openSortingList }>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className="places__options places__options--custom"
      >
        <li
          className="places__option places__option--active"
          tabIndex={ 0 }
          onClick={ sortOffers }
        >
          Popular
        </li>
        <li
          className="places__option"
          tabIndex={ 0 }
          onClick={ sortOffers }
        >
          Price: low to high
        </li>
        <li
          className="places__option"
          tabIndex={ 0 }
          onClick={ sortOffers }
        >
          Price: high to low
        </li>
        <li
          className="places__option"
          tabIndex={ 0 }
          onClick={ sortOffers }
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}

export default Sorting;
