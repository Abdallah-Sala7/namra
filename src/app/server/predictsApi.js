import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = "https://quiet-falls-97256.herokuapp.com";
const token = localStorage.getItem('token');

export const predictsApi = createApi({
  reducerPath: "predictsApi",
  baseQuery: fetchBaseQuery({baseUrl}),
  tagTypes: ['Predict'],
  //   const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODM1MzEwNDIsImV4cCI6MTY4MzUzNDY0Miwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoic2FhZCJ9.o2I-O0rrDHDFgtuYJM2yp_h66igdiEy6Ofj3wJrXZXAxQKK2H6zTIAScDShjzbvKhCgydVSkvFofYvkEN3VsYuf7LljhPZaucTFO8kVJ5r9qkd-tQ4eMESapxmNdPCrhZuoN8WvibAcoiTzqwLBQa189qDtZq3J9rQ1DQ9ggooNJmS8qV1L_Rtja3Vps1tFDumvwu5Q_AyDUsStuV4rXuXxRB58soIIhielbadnbWLRr1oNw4O0MnnrFauBxxUdfDlXP30xtq0hZ8onfgQV5iiXbIQwAuDTmWbR-Q9JlrK_QIV66Rzt3KQ8jw-Ym6wqVSOyP7J2hEbXpfQCt3aVI1A";
  //   console.log(token);
    
  //   if (token) {
  //     headers.set('www-authenticate', `Bearer ${token}`);
  //   }

  //   headers.set('Content-Type', 'application/json');
  //   return headers;
  // },

  endpoints:(builder) => ({
    createPredict: builder.mutation({
      query: (body) => ({
        url: '/api/predicts',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }),
      invalidatesTags: ['Predict']
    })
  })
})

export const {useCreatePredictMutation} = predictsApi;
