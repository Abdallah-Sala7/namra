import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./reducers/appSlice";
import betSlice from "./reducers/betSlice";
import { competitionApi } from "./server/competitionApi";
import { gameApi } from "./server/gameApi";
import { predictsApi } from "./server/predictsApi";

export const store = configureStore({
  reducer: {
    app: appSlice,
    betModal: betSlice,
    competitionApi: competitionApi.reducer,
    gameApi: gameApi.reducer,
    predictsApi: predictsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(competitionApi.middleware, gameApi.middleware, predictsApi.middleware),
});
