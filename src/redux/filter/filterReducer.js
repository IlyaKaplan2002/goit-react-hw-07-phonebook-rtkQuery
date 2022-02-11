import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './filterActions';

export const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload.toLowerCase(),
});
