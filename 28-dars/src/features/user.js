import { baseApi } from '../store/apiSlice'

const user = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => 'users',
      providesTags: ['USER'],
    }),
    addNewUser: build.mutation({
      query: (body) => ({
        method: 'POST',
        url: 'users',
        body,
      }),
      invalidatesTags: ['USER'],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: 'users/' + id,
        method: 'DELETE',
      }),
      invalidatesTags: ['USER'],
    }),
    updateUser: build.mutation({
      query: (body) => ({
        url: 'users/' + body.id,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['USER'],
    }),
  }),
})

export const {
  useGetAllUsersQuery,
  useAddNewUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = user
