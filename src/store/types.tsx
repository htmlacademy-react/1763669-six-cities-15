import { store } from './store';
import { PlaceCardProps } from '../components/blocks/place-сard/types';
import { UserData } from '../services/types';
import { ReviewProps } from '../components/blocks/review/types';

export type initialStateProps = {
  currentCity: string;
  offers: PlaceCardProps[];
  currentOffers: PlaceCardProps[];
  activeOfferId: string;
  activeOffer: PlaceCardProps | null;
  nearPlaces: PlaceCardProps[] | null;
  reviews: ReviewProps[] | null;
  userData: UserData;
  authorizationStatus: string;
  isDataLoading: boolean;
  favorites: PlaceCardProps[] | null;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
