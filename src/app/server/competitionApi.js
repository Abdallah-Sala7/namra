import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://quiet-falls-97256.herokuapp.com';
const headers = {
  'Content-Type': 'application/json',
};

export const competitionApi = createApi({
  reducerPath:'competitionApi',
  baseQuery: fetchBaseQuery({baseUrl, headers}),
  tagTypes: ['Competition'],
  endpoints: (builder) => ({
    getCompetition: builder.query({
      query: () => '/api/competitions?page=1',
      providesTags: ['Competition']
    })
  })
})

export const {useGetCompetitionQuery} = competitionApi;