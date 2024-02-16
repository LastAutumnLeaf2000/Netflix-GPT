import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload //state = action.payload Wont Work!!
    },
    removeUser: (state) => {
      return null; //state= null Wont Work!
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
