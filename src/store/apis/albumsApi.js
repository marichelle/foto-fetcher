import { faker } from '@faker-js/faker'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// `createApi()` automatically generates another "slice" for our application state
export const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }), // `fetchBaseQuery()` is a pre-configured version of "fetch"
  endpoints: builder => ({
    fetchAlbums: builder.query({
      query: user => ({
        url: '/albums',
        method: 'GET',
        params: {
          userId: user.id,
        },
      }),
    }),
    addAlbum: builder.mutation({
      query: user => ({
        url: '/albums',
        method: 'POST',
        body: {
          title: faker.commerce.productName(),
          userId: user.id,
        },
      }),
    }),
    removeAlbum: builder.mutation({
      query: album => ({
        url: `/albums/${album.id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi
