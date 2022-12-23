import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: " users",
  initialState: {
    users: {
      allUsers: null,
      isFetching: false,
      error: false,
    },
    message: "",
  },
  reducers: {
    //GET ALL USERS
    getUsersStart: (state) => {
      state.users.isFetching = true;
    },
    getUsersSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.allUsers = action.payload;
      state.users.error = false;
    },
    getUsersFailed: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },
  },
});

export const { getUsersStart, getUsersSuccess, getUsersFailed } = userSlice.actions;
export default userSlice.reducer;
