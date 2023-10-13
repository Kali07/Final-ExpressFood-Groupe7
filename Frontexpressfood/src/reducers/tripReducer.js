import { createSlice } from "@reduxjs/toolkit";

const tripSlice = createSlice({
  name: "trip",
  initialState: {
    distance: null,
    duration: null,
    icon: null,
    textForModal: null,
    backgroundColor: null,
  },
  reducers: {
    setTripInfo: (state, action) => {
      state.distance = action.payload.distance;
      state.duration = action.payload.duration;
      state.icon = action.payload.icon;
      state.textForModal = action.payload.textForModal;
      state.backgroundColor = action.payload.backgroundColor;
    },
  },
});

export const { setTripInfo } = tripSlice.actions;
export default tripSlice.reducer;
