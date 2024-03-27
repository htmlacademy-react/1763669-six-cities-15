import { createReducer } from '@reduxjs/toolkit';
import { addOffers, changeCity, showActiveCard } from './action';

import { CITIES } from '../consts';
import { offers } from '../mocks/place-card-data';

const initialState = {
  currentCity: CITIES[0].id,
  offers: offers.filter((offer) => offer.city.name === CITIES[0].id).sort((a, b) => b.rating - a.rating),
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
    });
});

export { reducer };
