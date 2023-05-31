import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://quiet-falls-97256.herokuapp.com";
const headers = {
  "Content-Type": "application/json",
};

export const searchGameApi = createApi({
  reducerPath: "searchGameApi",
  baseQuery: fetchBaseQuery({ baseUrl, headers }),
  tagTypes: ["Game"],
  endpoints: (builder) => ({
    getGameByDate: builder.query({
      query: (date) => `/api/search_games?page=1&date_time_game=${date}`,
      providesTags: ["Game"],
    }),
  }),
});

export const { useGetGameByDateQuery } = searchGameApi;
