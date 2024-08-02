import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import themeSlice from "./theme/themeSlice";

const rootReducer = combineReducers({
  theme: themeSlice,
});

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// export const persistor = persistStore(store);
