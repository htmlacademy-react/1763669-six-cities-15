import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { State } from '../store/types';
import { loadOffer, loadNearPlaces } from '../store/action';

import { APIRoute, AuthorizationStatus } from '../components/consts';
import { dropToken, saveToken } from '../store/token';
import { AuthData, FavoriteProps, UserData } from './types';
import { PlaceCardProps } from '../components/blocks/place-сard/types';
import { AppDispatch } from '../store/types';
import {
  clearUserData,
  loadOffers,
  requireAuthorization,
  setSpinner,
  setUserData,
  loadReviews,
  addReview
} from '../store/action';
import { ReviewProps } from '../components/blocks/review/types';
import { CommentProps } from '../components/blocks/form-comment/types';

type ApiThunkConfigObject = {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}

const fetchOffersAction = createAsyncThunk<void, undefined, ApiThunkConfigObject>(
  'fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setSpinner(true));
    const { data } = await api.get<PlaceCardProps[]>(APIRoute.Offers);
    dispatch(setSpinner(false));
    dispatch(loadOffers({ offers: data }));
  }
);

const fetchOffer = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'fetchOffer',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<PlaceCardProps>(`${APIRoute.Offers}/${offerId}`);
    dispatch(loadOffer(data));
  }
);

const fetchNearPlaces = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchNearPlaces',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<PlaceCardProps[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(loadNearPlaces(data));
  },
);

const fetchReviews = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<ReviewProps[]>(`${APIRoute.Comments}/${offerId}`);
    dispatch(loadReviews(data));
  }
);

const checkAuthAction = createAsyncThunk<void, undefined, ApiThunkConfigObject>(
  'checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const res = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserData(res.data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

const loginAction = createAsyncThunk<void, AuthData, ApiThunkConfigObject>(
  'login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const res = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(res.data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

const logoutAction = createAsyncThunk<void, undefined, ApiThunkConfigObject>(
  'logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(clearUserData());
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);

const sendReview = createAsyncThunk<void, { reviewData: CommentProps; offerId: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'sendReview',
  async ({ reviewData, offerId }, { dispatch, extra: api }) => {
    const { data } = await api.post<ReviewProps>(`${APIRoute.Comments}/${offerId}`, reviewData);
    dispatch(addReview(data));
  },
);

const fetchFavorites = createAsyncThunk<PlaceCardProps[], undefined, { extra: AxiosInstance }>(
  'fetchFavorites',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<PlaceCardProps[]>(APIRoute.Favorites);
    return data;
  },
);

const addFavorite = createAsyncThunk<PlaceCardProps, FavoriteProps, { dispatch: AppDispatch; extra: AxiosInstance }>(
  'addFavorite',
  async ({ id, isFavorite }, {extra: api}) => {
    const status = Number(isFavorite).toString();
    const { data } = await api.post<PlaceCardProps>(`/favorite/${ id }/${ status }`);

    return data;
  }
);

export {
  fetchOffer,
  fetchNearPlaces,
  fetchReviews,
  checkAuthAction,
  fetchOffersAction,
  loginAction,
  logoutAction,
  sendReview,
  fetchFavorites,
  addFavorite
};
