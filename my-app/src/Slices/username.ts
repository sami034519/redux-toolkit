import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface UserState {
  username: string;
}

// Initial state
const initialState: UserState = {
  username: "sami",
};

// Create the slice
const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getuser: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

// Export the action
export const { getuser } = userslice.actions;

// Export the reducer
export default userslice.reducer;
