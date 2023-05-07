import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = "https://quiet-falls-97256.herokuapp.com";

export const predictsApi = createApi({
  reducerPath: "predictsApi",
  baseQuery: fetchBaseQuery({baseUrl}),
  tagTypes: ['Predict'],
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    headers.set('Content-Type', 'application/json');
    return headers;
  },

  endpoints:(builder) => ({
    createPredict: builder.mutation({
      query: (body) => ({
        url: '/api/predicts',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Predict']
    })
  })
})

export const {useCreatePredictMutation} = predictsApi;
