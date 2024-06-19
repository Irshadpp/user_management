// src/Store/Store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../utils/userSlice';
import adminReducer from '../utils/adminSlice';

// Load user state from local storage
const loadUserState = () => {
  try {
    const serializedState = localStorage.getItem('userState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load user state", err);
    return undefined;
  }
};

// Save user state to local storage
const saveUserState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('userState', serializedState);
  } catch (err) {
    console.error("Could not save user state", err);
  }
};

// Load admin state from local storage
const loadAdminState = () => {
  try {
    const serializedState = localStorage.getItem('adminState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load admin state", err);
    return undefined;
  }
};

// Save admin state to local storage
const saveAdminState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('adminState', serializedState);
  } catch (err) {
    console.error("Could not save admin state", err);
  }
};

const persistedUserState = loadUserState();
const persistedAdminState = loadAdminState();

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
  saveUserState(appStore.getState().user);
  saveAdminState(appStore.getState().admin);
});

export default appStore;
