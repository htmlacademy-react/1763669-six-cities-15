import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import useMap from './useMap';
import { MapProps } from './types';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT, AppRoute } from '../../consts';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ city, points, activeOfferId }: MapProps): JSX.Element {
  const { pathname } = useLocation();

  const mapRef = useRef(null);
  const map = useMap({ location: city.location, containerRef: mapRef });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: point.id === activeOfferId ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, activeOfferId]);

  return(
    <section
      className={classNames([
        'map',
        pathname === AppRoute.Main.toString() && 'cities__map',
        pathname === AppRoute.Offer.toString() && 'offer__map',
      ])}
      ref={ mapRef }
    />
  );
}

export default Map;
