// Initial state of the cart
const initialStateCart = [];

// Reducer function
export default cartSlice = (state = initialStateCart, action) => {
  switch (action.type) {
    case "cart/addToCart": {
      const product = action.payload;
      // Check if product is already in the cart
      const existingProduct = state.find((item) => item.id === product.id);

      if (existingProduct) {
        // If the product exists, increment the quantity
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        // If the product doesn't exist, add it with quantity 1
        return [...state, { ...product, quantity: 1 }];
      }
    }

    case "cart/removeFromCart": {
      const productId = action.payload;
      // Find the index of the product in the cart
      const index = state.findIndex((item) => item.id === productId);

      if (index !== -1) {
        const product = state[index];
        // Decrease the quantity or remove the item if quantity is 1
        if (product.quantity > 1) {
          return state.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          return state.filter((item) => item.id !== productId);
        }
      }
      return state;
    }
    case "cart/clearCart": {
      return initialStateCart;
    }

    default:
      return state;
  }
};

// Action creators
export const addToCart = (product) => ({
  type: "cart/addToCart",
  payload: product,
});

export const removeItemCart = (productId) => ({
  type: "cart/removeFromCart",
  payload: productId,
});

export const clearCart = () => ({
  type: "cart/clearCart",
});
