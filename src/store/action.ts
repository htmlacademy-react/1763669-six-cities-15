import { createAction } from '@reduxjs/toolkit';

import { PlaceCardProps } from '../components/blocks/place-сard/types';
import { AuthorizationStatus } from '../components/consts';
import { UserData } from '../services/types';
import { ReviewProps } from '../components/blocks/review/types';

const changeCity = createAction<{currentCity: string}>('changeCity');
const loadOffers = createAction<{ offers: PlaceCardProps[] }>('loadOffers');
const showActiveCard = createAction<{ activeOfferId: string }>('showActiveCard');
const updateOffers = createAction('updateOffers');
const loadOffer = createAction<PlaceCardProps>('setActiveOffer');
const loadNearPlaces = createAction<PlaceCardProps[]>('loadNearPlaces');
const loadReviews = createAction<ReviewProps[]>('loadReviews');
const addReview = createAction<ReviewProps>('addReview');

const sortOffersPopular = createAction('sortOffersPopular');
const sortOffersPriceLowToHight = createAction('sortOffersPriceLowToHight');
const sortOffersPriceHightToLow = createAction('sortOffersPriceHightToLow');
const sortOffersRating = createAction('sortOffersRating');

const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
const setSpinner = createAction<boolean>('setSpinner');
const setUserData = createAction<UserData>('setUserData');
const clearUserData = createAction('clearUserData');


export {
  changeCity,
  loadOffers,
  showActiveCard,
  updateOffers,
  loadOffer,
  loadNearPlaces,
  loadReviews,
  addReview,
  sortOffersPopular,
  sortOffersPriceLowToHight,
  sortOffersPriceHightToLow,
  sortOffersRating,
  requireAuthorization,
  setSpinner,
  setUserData,
  clearUserData,
};
