export type CityProps = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

type PointProps = {
  id: string;
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

type PointsProps = PointProps[];

export type MapProps = {
  city: CityProps;
  points: PointsProps;
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
