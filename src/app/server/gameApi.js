import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://quiet-falls-97256.herokuapp.com';

export const gameApi = createApi({
  reducerPath: "gameApi",
  baseQuery: fetchBaseQuery({baseUrl}),
  tagTypes: ['Game'],
  prepareHeaders: (headers) => {
    headers.set('Access-Control-Allow-Origin', '*');
    return headers;
  },
  endpoints:(builder) => ({
    getGame: builder.query({
      query: () => '/api/games?page=1',
      providesTags: ['Game']
    })
  })
})

export const {useGetGameQuery} = gameApi;