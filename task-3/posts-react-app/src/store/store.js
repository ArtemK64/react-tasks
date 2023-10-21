import { configureStore } from "@reduxjs/toolkit";
import incrementReducer from "./reducers/incrementReducer/incrementReducer";
import postsReducer from "./reducers/postsReducer/postsReducer";
import usersReducer from "./reducers/usersReducer/usersReducer";

export const store = configureStore({
  reducer: {
    increment: incrementReducer,
    posts: postsReducer,
    users: usersReducer,
  },
});
