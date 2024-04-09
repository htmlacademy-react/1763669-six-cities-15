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
  'main/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setSpinner(true));
    const { data } = await api.get<PlaceCardProps[]>(APIRoute.Offers);
    dispatch(setSpinner(false));
    dispatch(loadOffers({ offers: data }));
  }
);

const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offer/fetchOffer',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<PlaceCardProps>(`${ APIRoute.Offers }/${ offerId }`);
    dispatch(loadOffer(data));
  }
);

const fetchNearPlacesAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchNearPlaces',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<PlaceCardProps[]>(`${ APIRoute.Offers }/${ offerId }/nearby`);
    dispatch(loadNearPlaces(data));
  },
);

const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchReviews',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<ReviewProps[]>(`${ APIRoute.Comments }/${ offerId }`);
    dispatch(loadReviews(data));
  }
);

const checkAuthAction = createAsyncThunk<void, undefined, ApiThunkConfigObject>(
  'user/checkAuth',
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
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const res = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(res.data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

const logoutAction = createAsyncThunk<void, undefined, ApiThunkConfigObject>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(clearUserData());
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);

const sendReviewAction = createAsyncThunk<void, { reviewData: CommentProps; offerId: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async ({ reviewData, offerId }, { dispatch, extra: api }) => {
    const { data } = await api.post<ReviewProps>(`${APIRoute.Comments}/${offerId}`, reviewData);
    dispatch(addReview(data));
  },
);

const fetchFavoritesAction = createAsyncThunk<PlaceCardProps[], undefined, { extra: AxiosInstance }>(
  'data/fetchFavorites',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<PlaceCardProps[]>(APIRoute.Favorites);
    return data;
  },
);

const addFavoriteAction = createAsyncThunk<PlaceCardProps, FavoriteProps, { dispatch: AppDispatch; extra: AxiosInstance }>(
  'data/addFavorite',
  async ({ offerId, isFavorite }, { extra: api }) => {
    const status = Number(isFavorite).toString();
    const { data } = await api.post<PlaceCardProps>(`${ APIRoute.Favorites }/${ offerId }/${ status }`);

    return data;
  }
);

export {
  fetchOfferAction,
  fetchNearPlacesAction,
  fetchReviewsAction,
  checkAuthAction,
  fetchOffersAction,
  loginAction,
  logoutAction,
  sendReviewAction,
  fetchFavoritesAction,
  addFavoriteAction
};
