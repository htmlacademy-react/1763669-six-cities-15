import { store } from './store';
import { PlaceCardProps } from '../components/blocks/place-сard/types';

export type initialStateProps = {
  currentCity: string;
  offers: PlaceCardProps[];
  currentOffers: PlaceCardProps[];
  activeOfferId: string;
  authorizationStatus: string;
  isDataLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
