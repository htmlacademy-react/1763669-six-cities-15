import { createAction } from '@reduxjs/toolkit';

import { PlaceCardProps } from '../components/blocks/place-сard/types';
import { AuthorizationStatus } from '../components/consts';
import { UserData } from '../services/types';
import { ReviewProps } from '../components/blocks/review/types';

const changeCity = createAction<{ currentCity: string }>('city/changeCity');

const loadOffers = createAction<{ offers: PlaceCardProps[] }>('offers/loadOffers');
const updateOffers = createAction('offers/updateOffers');

const showActiveCard = createAction<{ activeOfferId: string }>('offer/showActiveCard');
const loadOffer = createAction<PlaceCardProps>('offer/setActiveOffer');
const loadNearPlaces = createAction<PlaceCardProps[]>('offer/loadNearPlaces');

const loadReviews = createAction<ReviewProps[]>('reviews/loadReviews');
const addReview = createAction<ReviewProps>('reviews/addReview');

const sortOffersPopular = createAction('sorting/sortOffersPopular');
const sortOffersPriceLowToHight = createAction('sorting/sortOffersPriceLowToHight');
const sortOffersPriceHightToLow = createAction('sorting/sortOffersPriceHightToLow');
const sortOffersRating = createAction('sorting/sortOffersRating');

const requireAuthorization = createAction<AuthorizationStatus>('userData/requireAuthorization');
const setUserData = createAction<UserData>('userData/setUserData');
const clearUserData = createAction('userData/clearUserData');

const setSpinner = createAction<boolean>('setSpinner');


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
