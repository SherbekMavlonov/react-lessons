import { baseApi } from '../store/apiSlice'

const todoApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllTodos: build.query({
      query: () => 'todos',
    }),
    createTodo: build.mutation({
      query: (body) => ({
        url: 'todos',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['POSTS'],
    }),
  }),
})

export const { useGetAllTodosQuery, useCreateTodoMutation } = todoApi
