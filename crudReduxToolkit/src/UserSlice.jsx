import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./features/crud/Data";

export const UserSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    
    addUser: (state, action) => {
      state.push(action.payload);
    },

    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const updatedUser = state.find((user) => user.id == id);
      if (updatedUser) {
        (updatedUser.name = name), (updatedUser.email = email);
      }
    },

    deleteUser: (state, action) => {
      const { id } = action.payload;
      const deleteduser = state.find((user) => user.id == id);
      if (deleteduser) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = UserSlice.actions;

export default UserSlice.reducer;
