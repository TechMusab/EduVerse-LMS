import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProfile = createAsyncThunk("auth/fetchProfile", async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(
    "http://localhost:5000/api/users/profile-info",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();
  return data.user;
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, status: "idle" },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
    updateUserRole: (state, action) => {
      if (state.user) {
        state.user = {
          ...state.user,
          role: "instructor",
          instructorProfile: {
            ...state.user.instructorProfile,
            ...action.payload
          }
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchProfile.rejected, (state) => {
        state.status = "failed";
        state.user = null;
      });
  },
});

export const { logout, updateUserRole } = authSlice.actions;
export default authSlice.reducer;
