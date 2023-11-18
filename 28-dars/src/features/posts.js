import { baseApi } from '../store/apiSlice'

const post = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPosts: build.query({
      query: () => 'posts',
      providesTags: ['POSTS'],
    }),
    getPostById: build.query({
      query: (id) => 'posts/' + id,
    }),
  }),
})

export const { useGetAllPostsQuery, useGetPostByIdQuery } = post
