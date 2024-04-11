import { createReducer } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  loadOffers,
  changeCity,
  showActiveCard,
  updateOffers,
  loadOffer,
  loadNearPlaces,
  loadReviews,
  sortOffersPriceLowToHight,
  sortOffersPriceHightToLow,
  sortOffersRating,
  requireAuthorization,
  setSpinner,
  setUserData,
  clearUserData,
  addReview,
  clearFavorites
} from './action';


import { AuthorizationStatus, MAX_NEAR_OFFERS, CITIES } from '../components/consts';
import { initialStateProps } from './types';
import { PlaceCardProps } from '../components/blocks/place-сard/types';
import { addFavoriteAction, fetchFavoritesAction } from '../services/api-actions';

const initialState: initialStateProps = {
  currentCity: CITIES[0].name,
  offers: [],
  currentOffers: [],
  activeOfferId: '',
  activeOffer: null,
  nearPlaces: null,
  reviews: null,
  userData: {
    name: '',
    avatarUrl: '',
    isPro: false,
    email: '',
    token: '',
  },
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
  favorites: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload.currentCity;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload.offers;
      state.currentOffers = state.offers.filter((offer) => offer.city.name === state.currentCity);
    })
    .addCase(loadOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(loadNearPlaces, (state, action) => {
      state.nearPlaces = action.payload.slice(0, MAX_NEAR_OFFERS);
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(showActiveCard, (state, action) => {
      state.activeOfferId = action.payload.activeOfferId;
    })
    .addCase(updateOffers, (state) => {
      state.currentOffers = state.offers.filter((offer) => offer.city.name === state.currentCity);
    })
    .addCase(sortOffersPriceLowToHight, (state) => {
      state.currentOffers = state.currentOffers.slice().sort((a, b) => a.price - b.price);
    })
    .addCase(sortOffersPriceHightToLow, (state) => {
      state.currentOffers = state.currentOffers.slice().sort((a, b) => b.price - a.price);
    })
    .addCase(sortOffersRating, (state) => {
      state.currentOffers = state.currentOffers.slice().sort((a, b) => b.rating - a.rating);
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(clearUserData, (state) => {
      state.userData = {
        name: '',
        avatarUrl: '',
        isPro: false,
        email: '',
        token: '',
      };
    })
    .addCase(addReview, (state, action) => {
      state.reviews = [action.payload, ...state.reviews ?? []];
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setSpinner, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
      state.favorites = action.payload || [];
    })
    .addCase(clearFavorites, (state) => {
      state.favorites = [];
    })
    .addCase(addFavoriteAction.fulfilled, (state, action: PayloadAction<PlaceCardProps>) => {
      if (action.payload.isFavorite) {
        state.favorites = [...(state.favorites ?? []), action.payload];
      } else {
        state.favorites = (state.favorites ?? []).filter((item) => item.isFavorite);
      }
    });
});

export { reducer };
