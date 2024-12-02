import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const user = { name: "John Doe", email: action.payload.email };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    register: (state, action) => {
      const user = { name: action.payload.name, email: action.payload.email };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
