import { createSlice } from "@reduxjs/toolkit";
  
  export const imageSlice = createSlice({
    name: "imageSlice",
    initialState: {
      imageIndex: 0,
    },
    reducers: {
      setImageIndex(state, action) {
        state.imageIndex = action.payload;
      },
    },
  })

  
  export default imageSlice;
  export const imageReducer = imageSlice.reducer;
  export const { setImageIndex } = imageSlice.actions;
