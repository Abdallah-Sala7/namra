import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://quiet-falls-97256.herokuapp.com/api';

export const gameApi = createApi({
  reducerPath: "gameApi",
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints:(builder) => ({
    getGame: builder.query({
      query: () => '/games?page=1'
    })
  })
})

export const {useGetGameQuery} = gameApi;