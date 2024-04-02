enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

const enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout'
}

enum AuthorizationStatus {
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
    id: 'Paris',
    link: '#',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    id: 'Cologne',
    link: '#',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    id: 'Brussels',
    link: '#',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    id: 'Amsterdam',
    link: '#',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    id: 'Hamburg',
    link: '#',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    id: 'Dusseldorf',
    link: '#',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
];

export {
  AppRoute,
  APIRoute,
  AuthorizationStatus,
  STAR_RATING,
  CITIES,
};


