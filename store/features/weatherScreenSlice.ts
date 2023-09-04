import { createSlice } from "@reduxjs/toolkit"

enum Screen {
  ExtendedForecast,
  CurrentConditions,
}

interface InitialState {
  screen: Screen,
}

const initialState: InitialState = {
  screen: Screen.ExtendedForecast,
}

const weatherScreenSlice = createSlice({
  name: "screens",
  initialState,
  reducers: {
    increment: (state) => {
      if(state.screen < Screen.CurrentConditions) {
        state.screen++
      } else {
        state.screen = Screen.ExtendedForecast
      }
      
    },
  }
})

export const { increment } = weatherScreenSlice.actions
export default weatherScreenSlice.reducer