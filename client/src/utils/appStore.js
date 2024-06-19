// src/Store/Store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../utils/userSlice';
import adminReducer from '../utils/adminSlice';

// Load state from local storage
const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error(`Could not load ${key} state`, err);
    return undefined;
  }
};

// Save state to local storage
const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error(`Could not save ${key} state`, err);
  }
};

const persistedUserState = loadState('userState');
const persistedAdminState = loadState('adminState');

const appStore = configureStore({
  reducer: {
    user: userReducer,
    admin: adminReducer,
  },
  preloadedState: {
    user: persistedUserState,
    admin: persistedAdminState
  }
});

appStore.subscribe(() => {
  saveState('userState', appStore.getState().user);
  saveState('adminState', appStore.getState().admin);
});

export default appStore;
