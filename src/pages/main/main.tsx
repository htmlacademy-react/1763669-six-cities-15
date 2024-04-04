import { useAppSelector } from '../../store/useAppDispatch';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import PlaceCards from '../../components/blocks/place-cards/place-cards';
import Map from '../../components/blocks/map/map';
import { CITIES } from '../../components/consts';
import LocationList from '../../components/blocks/location-list/location-list';
import Sorting from '../../components/blocks/sorting/sorting';
import Header from '../../components/layout/header/header';

function Main(): JSX.Element {
  const location = useLocation();

  const currentCity = useAppSelector((state) => state.currentCity);
  const currentOffers = useAppSelector((state) => state.currentOffers);
  const activeOfferId = useAppSelector((state) => state.activeOfferId);
  const cityIndex = CITIES.findIndex((city) => currentCity === city.id);

  return (
    <div className="page page--gray page--main">

      <Header location={ location }/>

      <main
        className={classNames([
          'page__main',
          'page__main--index',
          currentOffers.length === 0 ? 'page__main--index-empty' : '',
        ])}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList cities={ CITIES } />
          </section>
        </div>
        <div className="cities">
          {currentOffers.length === 0 ?
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div> :
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
            </div>}
        </div>
      </main>
    </div>
  );
}

export default Main;
