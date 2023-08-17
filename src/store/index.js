import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { albumsApi } from './apis/albumsApi'
import { usersReducer } from './slices/usersSlice'

export const store = configureStore({
  reducer: {
    // Connect API reducer to the store
    [albumsApi.reducerPath]: albumsApi.reducer,
    users: usersReducer,
  },
  // Connect API middleware to the store
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(albumsApi.middleware),
})

// Connect API listeners to the store
setupListeners(store.dispatch)

export * from './thunks/addUser'
export * from './thunks/fetchUsers'
export * from './thunks/removeUser'

export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from './apis/albumsApi'
