import { createAction } from '@reduxjs/toolkit';

import { PlaceCardProps } from '../blocks/place-сard/types';

export const addOffers = createAction<{ offers: PlaceCardProps[] }>('addOffers');
