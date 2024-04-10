import { PlaceCardProps } from '../place-сard/types';

export type CityProps = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export type MapProps = {
  city: CityProps;
  points: PlaceCardProps[] | null;
  activeOfferId?: string | null;
};

export type UseMapProps = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  containerRef: React.RefObject<HTMLElement | null>;
}

export const initialMapData = {
  name: '',
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0
  }
};
