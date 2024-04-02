import { createReducer } from '@reduxjs/toolkit';
import {
  addOffers,
  changeCity,
  showActiveCard,
  updateOffers,
  sortOffersPriceLowToHight,
  sortOffersPriceHightToLow,
  sortOffersRating,
} from './action';

import { CITIES } from '../components/consts';
import { offers } from '../components/mocks/place-card-data';

const initialState = {
  currentCity: CITIES[0].id,
  offers: offers.filter((offer) => offer.city.name === CITIES[0].id).sort(() => Math.random() - 0.5),
  offersFavorite: offers.filter((offer) => offer.isFavorite),
  activeOfferId: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload.currentCity;
    })
    .addCase(addOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(showActiveCard, (state, action) => {
      state.activeOfferId = action.payload.activeOfferId;
    })
    .addCase(updateOffers, (state) => {
      state.offers = offers.filter((offer) => offer.city.name === state.currentCity);
    })
    .addCase(sortOffersPriceLowToHight, (state) => {
      state.offers = offers.slice().sort((a, b) => a.price - b.price);
    })
    .addCase(sortOffersPriceHightToLow, (state) => {
      state.offers = offers.slice().sort((a, b) => b.price - a.price);
    })
    .addCase(sortOffersRating, (state) => {
      state.offers = offers.slice().sort((a, b) => b.rating - a.rating);
    });
});

export { reducer };
