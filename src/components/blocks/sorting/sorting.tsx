// import { useAppSelector } from '../../store/useAppDispatch';

function Sorting(): JSX.Element {
  // const currentOffers = useAppSelector((state) => state.offers);

  // const onClickHandler = (evt) => {

  // }

  // По возрастанию цены:
  // .sort((a, b) => b.price - a.price)

  // По убыванию цены:
  // .sort((a, b) => a.price - b.price)

  // По возрастанию рейтинга:
  // .sort((a, b) => b.rating - a.rating)

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={ 0 }>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className="places__option places__option--active" tabIndex={ 0 }>Popular</li>
        <li className="places__option" tabIndex={ 0 }>Price: low to high</li>
        <li className="places__option" tabIndex={ 0 }>Price: high to low</li>
        <li className="places__option" tabIndex={ 0 }>Top rated first</li>
      </ul>
    </form>
  );
}

export default Sorting;
