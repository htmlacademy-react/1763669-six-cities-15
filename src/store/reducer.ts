import { createReducer } from '@reduxjs/toolkit';
import {
  addOffers,
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
import { offers } from '../components/mocks/place-card-data';

const initialState = {
  currentCity: CITIES[0].id,
  offers: [],
  offersFavorite: offers.filter((offer) => offer.isFavorite),
  activeOfferId: '',
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload.currentCity;
    })
    .addCase(addOffers, (state, action) => {
      state.offers = action.payload.offers;
      state.offers = offers.filter((offer) => offer.city.name === state.currentCity);
    })
    .addCase(showActiveCard, (state, action) => {
      state.activeOfferId = action.payload.activeOfferId;
    })
    .addCase(updateOffers, (state) => {
      state.offers = offers.filter((offer) => offer.city.name === state.currentCity);
    })
    .addCase(sortOffersPopular, (state) => {
      state.offers = offers.sort(() => Math.random() - 0.5);
    })
    .addCase(sortOffersPriceLowToHight, (state) => {
      state.offers = offers.slice().sort((a, b) => a.price - b.price);
    })
    .addCase(sortOffersPriceHightToLow, (state) => {
      state.offers = offers.slice().sort((a, b) => b.price - a.price);
    })
    .addCase(sortOffersRating, (state) => {
      state.offers = offers.slice().sort((a, b) => b.rating - a.rating);
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
