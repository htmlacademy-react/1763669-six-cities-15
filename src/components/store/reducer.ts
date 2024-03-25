import { createReducer } from '@reduxjs/toolkit';
import { addOffers } from './action';

import { CITIES } from '../consts';
import { offers } from '../mocks/place-card-data';

const initialState = {
  city: CITIES[0],
  offers: offers.filter((offer) => offer.city.name === CITIES[0].id),
  offersFavorite: offers.filter((offer) => offer.isFavorite),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});

export { reducer };
