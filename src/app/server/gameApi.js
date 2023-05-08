import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://quiet-falls-97256.herokuapp.com';
const headers = {
  'Content-Type': 'application/json',
};

export const gameApi = createApi({
  reducerPath: "gameApi",
  baseQuery: fetchBaseQuery({baseUrl, headers}),
  tagTypes: ['Game'],
  endpoints:(builder) => ({
    getGame: builder.query({
      query: () => '/api/games?page=1',
      providesTags: ['Game']
    })
  })
})

export const {useGetGameQuery} = gameApi;