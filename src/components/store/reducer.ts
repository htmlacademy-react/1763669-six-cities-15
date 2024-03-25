import { createReducer } from '@reduxjs/toolkit';
import { activeCardId } from './action';

const initialState = {
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(activeCardId, () => {
      // actions
    });
});

export {reducer};
