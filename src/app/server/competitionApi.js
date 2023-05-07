import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://quiet-falls-97256.herokuapp.com';

export const competitionApi = createApi({
  reducerPath:'competitionApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  tagTypes: ['Competition'],
  prepareHeaders: (headers) => {
    headers.set('Access-Control-Allow-Origin', '*');
    return headers;
  },
  endpoints: (builder) => ({
    getCompetition: builder.query({
      query: () => '/api/competitions?page=1',
      providesTags: ['Competition']
    })
  })
})

export const {useGetCompetitionQuery} = competitionApi;