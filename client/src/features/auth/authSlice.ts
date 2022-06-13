import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface AuthState {
  jsonWebToken: string;
}

const initialState: AuthState = {
  jsonWebToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setJWT: (state, action: PayloadAction<string>) => {
      state.jsonWebToken = action.payload;
    },
  },
});

export const { setJWT } = authSlice.actions;

export const getJWT = (state: RootState) => state.auth.jsonWebToken;

export default authSlice.reducer;
