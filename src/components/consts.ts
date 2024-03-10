export const Settings = {
  placesCount: 312,
} as const;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
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
