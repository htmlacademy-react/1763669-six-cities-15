export const Settings = {
  placesCount: 312,
} as const;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const STAR_RATING = [
  {
    value: '5',
    id: '5-stars',
    title: 'perfect'
  },
  {
    value: '4',
    id: '4-stars',
    title: 'good'
  },
  {
    value: '3',
    id: '3-stars',
    title: 'not bad'
  },
  {
    value: '2',
    id: '2-stars',
    title: 'badly'
  },
  {
    value: '1',
    id: '1-star',
    title: 'terribly'
  },
];

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const city = {
  name: 'Amsterdam',
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 11
  }
};

export const CITIES = [
  {
    name: 'Paris',
    link: '#',
    isActive: false,
  },
  {
    name: 'Cologne',
    link: '#',
    isActive: false,
  },
  {
    name: 'Brussels',
    link: '#',
    isActive: false,
  },
  {
    name: 'Amsterdam',
    link: '#',
    isActive: true,
  },
  {
    name: 'Hamburg',
    link: '#',
    isActive: false,
  },
  {
    name: 'Dusseldorf',
    link: '#',
    isActive: false,
  },
];

