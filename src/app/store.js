import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./reducers/appSlice";
import betSlice from "./reducers/betSlice";
import { competitionApi } from "./server/competitionApi";
import { gameApi } from "./server/gameApi";
import { predictsApi } from "./server/predictsApi";
import { authApi } from "./server/authApi";
import { searchGameApi } from "./server/searchGameApi";

export const store = configureStore({
  reducer: {
    app: appSlice,
    betModal: betSlice,
    competitionApi: competitionApi.reducer,
    gameApi: gameApi.reducer,
    predictsApi: predictsApi.reducer,
    authApi: authApi.reducer,
    searchGameApi: searchGameApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      competitionApi.middleware,
      gameApi.middleware,
      predictsApi.middleware,
      authApi.middleware,
      searchGameApi.middleware
    ),
});
