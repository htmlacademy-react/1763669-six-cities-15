import { createReducer } from '@reduxjs/toolkit';
import {
  loadOffers,
  changeCity,
  showActiveCard,
  updateOffers,
  sortOffersPopular,
  sortOffersPriceLowToHight,
  sortOffersPriceHightToLow,
  sortOffersRating,
  requireAuthorization,
} from './action';

import { AuthorizationStatus } from '../components/consts';
import { CITIES } from '../components/consts';
import { initialStateProps } from './types';

const initialState: initialStateProps = {
  currentCity: CITIES[0].id,
  offers: [],
  activeOfferId: '',
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload.currentCity;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(showActiveCard, (state, action) => {
      state.activeOfferId = action.payload.activeOfferId;
    })
    .addCase(updateOffers, (state) => {
      state.offers = initialState.offers.filter((offer) => offer.city.name === state.currentCity);
    })
    .addCase(sortOffersPopular, (state) => {
      state.offers = initialState.offers.sort(() => Math.random() - 0.5);
    })
    .addCase(sortOffersPriceLowToHight, (state) => {
      state.offers = initialState.offers.slice().sort((a, b) => a.price - b.price);
    })
    .addCase(sortOffersPriceHightToLow, (state) => {
      state.offers = initialState.offers.slice().sort((a, b) => b.price - a.price);
    })
    .addCase(sortOffersRating, (state) => {
      state.offers = initialState.offers.slice().sort((a, b) => b.rating - a.rating);
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
