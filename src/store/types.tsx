import { store } from './store';
import { PlaceCardProps } from '../components/blocks/place-сard/types';
import { UserData } from '../services/types';

export type initialStateProps = {
  currentCity: string;
  offers: PlaceCardProps[];
  currentOffers: PlaceCardProps[];
  activeOfferId: string;
  userData: UserData;
  authorizationStatus: string;
  isDataLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
