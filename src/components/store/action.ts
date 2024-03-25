import { createAction } from '@reduxjs/toolkit';

//import { CityProps } from '../blocks/map/types';
import { PlaceCardProps } from '../blocks/place-сard/types';

export const changeCity = createAction<{currentCity: string}>('changeCity');
export const addOffers = createAction<{ offers: PlaceCardProps[] }>('addOffers');
export const showActiveCard = createAction<{ activeOfferId: string }>('showActiveCard');
