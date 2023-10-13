import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// Récupérez le panier depuis les cookies en tant que chaîne JSON
const cartFromCookie = Cookies.get("cart");
// Initialisez l'état du panier en tant que tableau vide ou à partir des cookies si disponible
const initialState = cartFromCookie ? JSON.parse(cartFromCookie) : [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        // Si le repas est déjà dans le panier, mettez à jour la quantité et le prix
        existingItem.quantity += action.payload.quantity;
        // existingItem.price += action.payload.price * action.payload.quantity;
      } else {
        // Si le repas n'est pas encore dans le panier, ajoutez-le
        state.push(action.payload);
      }

      Cookies.set("cart", JSON.stringify(state)); // Stockez le panier en tant que JSON dans les cookies
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.filter((item) => item.id !== action.payload.id);
      Cookies.set("cart", JSON.stringify(updatedCart)); // Mettez à jour le panier en tant que JSON dans les cookies après la suppression
      return updatedCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
