import { apiSlice } from './apiSlice';
const USERS_URL = '/api/users';

export const notesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    create_note: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/note`,
        method: 'POST',
        body: data,
      }),
    }),
    get_user: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'GET',
      }),
    })
  }),
});

export const {
  usecreateNoteMutation,
} = notesApiSlice;
