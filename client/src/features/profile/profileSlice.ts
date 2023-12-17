import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { User } from "./services/profileService";
import { RootState } from "../../app/rootReducer";

const initialState: { profile: User; authToken: string } = {
  profile: {
    id: "",
    name: "",
    email: "",
  },
  authToken: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<{ value: string }>) => {
      state.authToken = action.payload.value;
    },
    setActiveProfile: (state, action: PayloadAction<{ profile: User }>) => {
      state.profile.id = action.payload.profile.id;
      state.profile.email = action.payload.profile.email;
      state.profile.name = action.payload.profile.name;
    },
  },
});

export const { setAuthToken, setActiveProfile } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
export const profileState = (state: RootState): RootState["profile"] =>
  state.profile;
export const profileData = createSelector(profileState, (state) => state);
