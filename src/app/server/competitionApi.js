import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://quiet-falls-97256.herokuapp.com/api';

export const competitionApi = createApi({
  reducerPath:'competitionApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCompetition: builder.query({
      query: () => '/competitions?page=1'
    })
  })
})

export const {useGetCompetitionQuery} = competitionApi;