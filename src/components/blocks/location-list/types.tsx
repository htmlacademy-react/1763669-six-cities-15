export type CityProps = {
  id: string;
  link: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export type CitiesProps = CityProps[]
