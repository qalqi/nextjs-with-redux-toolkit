import { configureStore } from '@reduxjs/toolkit'
import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import clockReducer from './lib/slices/clockSlice'
import counterReducer from './lib/slices/counterSlice'
import notesReducer from './lib/slices/notesSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    clock: clockReducer,
    notes: notesReducer,
  },
  devTools: true,
})
