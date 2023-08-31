import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import weatherScreenSlice from "./features/weatherScreenSlice"

export const store = configureStore({
  reducer: {
    weatherScreen: weatherScreenSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>