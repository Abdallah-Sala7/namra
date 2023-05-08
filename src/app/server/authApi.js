import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseUrl = "https://quiet-falls-97256.herokuapp.com"

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({baseUrl}),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/auth",
        method: "POST",
        body
      }),
      invalidatesTags: ["Auth"]
    }),
  }),
})

export const {useLoginMutation} = authApi;