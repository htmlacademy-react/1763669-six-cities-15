import { createAction } from '@reduxjs/toolkit';

import { PlaceCardProps } from '../components/blocks/place-сard/types';

export const changeCity = createAction<{currentCity: string}>('changeCity');
export const addOffers = createAction<{ offers: PlaceCardProps[] }>('addOffers');
export const showActiveCard = createAction<{ activeOfferId: string }>('showActiveCard');
export const updateOffers = createAction('updateOffers');
export const sortOffersPriceLowToHight = createAction('sortOffersPriceLowToHight');
export const sortOffersPriceHightToLow = createAction('sortOffersPriceHightToLow');
export const sortOffersRating = createAction('sortOffersRating');
