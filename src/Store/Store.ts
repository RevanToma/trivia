import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import triviaReducer from "./TriviaStore/TriviaSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // this is for local storage

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["trivia"],
};
const rootReducer = combineReducers({
  trivia: triviaReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV === "development"
      ? getDefaultMiddleware({ serializableCheck: false }).concat(logger)
      : getDefaultMiddleware(),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
