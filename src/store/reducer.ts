import { createReducer } from '@reduxjs/toolkit';
import {
  loadOffers,
  changeCity,
  showActiveCard,
  updateOffers,
  loadOffer,
  sortOffersPopular,
  sortOffersPriceLowToHight,
  sortOffersPriceHightToLow,
  sortOffersRating,
  requireAuthorization,
  setSpinner,
  setUserData,
  clearUserData,
} from './action';

import { AuthorizationStatus } from '../components/consts';
import { CITIES } from '../components/consts';
import { initialStateProps } from './types';

const initialState: initialStateProps = {
  currentCity: CITIES[0].id,
  offers: [],
  currentOffers: [],
  activeOfferId: '',
  activeOffer: null,
  userData: {
    name: '',
    avatarUrl: '',
    isPro: false,
    email: '',
    token: '',
  },
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
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
    .addCase(showActiveCard, (state, action) => {
      state.activeOfferId = action.payload.activeOfferId;
    })
    .addCase(updateOffers, (state) => {
      state.currentOffers = state.offers.filter((offer) => offer.city.name === state.currentCity);
    })
    .addCase(sortOffersPopular, (state) => {
      state.currentOffers = state.currentOffers.sort(() => Math.random() - 0.5);
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setSpinner, (state, action) => {
      state.isDataLoading = action.payload;
    });
});

export { reducer };
