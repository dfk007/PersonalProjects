import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    home: false,
    services: false,
    whyus: false,
    howitworks: false,
    sampleresumes: false,
    pricing: false,
    aboutus: false,
  },
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setValue: (state, action) => {
      var { name, bool } = action.payload;
      //   console.log(name, bool);
      state.value = { name: name, bool: bool };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue } = navbarSlice.actions;
export const getValue = (state) => state.navbar.value;

export default navbarSlice.reducer;
