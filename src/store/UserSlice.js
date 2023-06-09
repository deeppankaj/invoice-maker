import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("fetchuser", async () => {
    const data = {
    data:"Authorization token"
    }
  try {
    const response = await axios.post("http://localhost:8000/user/verify", data ,{
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const userSlicevalue = userSlice.reducer;
