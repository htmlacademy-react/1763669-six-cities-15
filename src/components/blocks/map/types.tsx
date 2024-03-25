import { PlaceCardProps } from '../place-сard/types';

export type CityProps = {
  id: string;
  link: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export type MapProps = {
  city: CityProps;
  points: PlaceCardProps[];
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
