import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const userFromCookie = Cookies.get("user");
const initialState = userFromCookie ? JSON.parse(userFromCookie) : null;

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      // Mettez à jour l'état avec les données de l'utilisateur et enregistrez-le dans le cookie
      Cookies.set("user", JSON.stringify(action.payload), { expires: 7 }); // Le cookie expirera dans 7 jours
      return action.payload;
    },
    userLoggedOut: (state) => {
      // Supprimez le cookie lorsque l'utilisateur se déconnecte
      Cookies.remove("user");
      window.location.href = "/";
      return null;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = userSlice.actions;
export default userSlice.reducer;
