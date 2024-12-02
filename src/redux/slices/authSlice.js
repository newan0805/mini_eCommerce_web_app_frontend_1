import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.user.find((u) => u.email === email);
      console.log(user);

      if (user && user.password === password) {
        state.user = { id: user.id, email: user.email };
        localStorage.setItem(
          "user",
          JSON.stringify({ id: user.id, email: user.email })
        );
        state.login = true;
      } else {
        state.login = false;
      }
    },
    logout: (state) => {
      state.user = null;
    },
    register: (state, action) => {
      const user = {
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
      state.user = user;
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
