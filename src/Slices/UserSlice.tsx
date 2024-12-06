
import { createSlice } from "@reduxjs/toolkit";
import { getItem, removeItem, setItem } from "../Services/LocalStorageService";

const initialState = getItem('user') || null; 

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      setItem('user', action.payload);
      state=setItem; 
      return action.payload; 
    },

    removeUser: (state) => {
      removeItem('user'); 
      state=null;
      return state; 
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
