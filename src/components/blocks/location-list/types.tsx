export type CityProps = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export type CitiesProps = CityProps[]
