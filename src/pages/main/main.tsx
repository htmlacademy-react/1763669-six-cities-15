import { useAppSelector } from '../../store/useAppDispatch';

import PlaceCards from '../../components/blocks/place-cards/place-cards';
import Map from '../../components/blocks/map/map';
import { CITIES } from '../../components/consts';
import LocationList from '../../components/blocks/location-list/location-list';
import Sorting from '../../components/blocks/sorting/sorting';

function Main(): JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);
  const currentOffers = useAppSelector((state) => state.currentOffers);
  const activeOfferId = useAppSelector((state) => state.activeOfferId);
  const cityIndex = CITIES.findIndex((city) => currentCity === city.id);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList cities={ CITIES } />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{ currentOffers.length } places to stay in { currentCity }</b>
              <Sorting />
              <PlaceCards cards={ currentOffers } />
            </section>
            <div className="cities__right-section">
              <Map city={ CITIES[cityIndex] } points={ currentOffers } activeOfferId={ activeOfferId }/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
