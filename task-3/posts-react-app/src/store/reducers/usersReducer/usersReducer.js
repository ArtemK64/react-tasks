import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoadingUsers: false,
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsersToStore: (state, actions) => {
      const { users, loaded } = actions.payload;
      state.users = users;
      state.isLoadingUsers = loaded;
    },
  },
});

export const { addUsersToStore } = usersSlice.actions;
export default usersSlice.reducer;