// src/Store/Store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../utils/userSlice';
import adminReducer from '../utils/adminSlice'

// Load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

// Save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const persistedState = loadState();

const appStore = configureStore({
  reducer: {
    user: userReducer,
    admin: adminReducer,
  },
  preloadedState: persistedState
});

appStore.subscribe(() => {
  saveState(appStore.getState());
});

export default appStore;
