// src/app/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://jsonplaceholder.typicode.com',
});

export const api = createApi({
  baseQuery,
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => 'todos',
    }),
    getTasksNoCache: builder.query({
      query: () => 'todos',
      providesTags: (result) => result ? [{ type: 'Task', id: 'LIST' }] : [],
    }),
  }),
});

export const { useGetTasksQuery, useGetTasksNoCacheQuery } = api;
export default api;
