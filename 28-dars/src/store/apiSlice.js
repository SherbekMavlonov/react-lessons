import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shopery-api.onrender.com/',
  }),
  endpoints: () => ({}),
  tagTypes: ['POSTS', 'TODOS', 'USER'],
})
