import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import useMap from './useMap';
import { MapProps } from './types';
import { AppRoute } from '../../consts';

import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ city, points, activeOfferId }: MapProps): JSX.Element {
  const { pathname } = useLocation();

  const mapRef = useRef(null);
  const map = useMap({ location: city.location, containerRef: mapRef });
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map]);

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
