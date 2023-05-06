import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./reducers/appSlice";
import betSlice from "./reducers/betSlice";
import { competitionApi } from "./server/competitionApi";
import { gameApi } from "./server/gameApi";

export const store = configureStore({
  reducer: {
    app: appSlice,
    betTap: betSlice,
    competitionApi: competitionApi.reducer,
    gameApi: gameApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(competitionApi.middleware, gameApi.middleware),
});
