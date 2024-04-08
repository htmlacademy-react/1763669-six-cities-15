enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

const enum APIRoute {
  Offers = '/offers',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout'
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const STAR_RATING = [
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

const CITIES = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
];

const MAX_NEAR_OFFERS = 3;

export {
  AppRoute,
  APIRoute,
  AuthorizationStatus,
  STAR_RATING,
  CITIES,
  MAX_NEAR_OFFERS
};


