export const addItemToCart = (cartItems, cartItemToAdd) => {
  //1. check if cartItemToAdd exists alr

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // 2. (if it exists) return qty + 1 if its the item and the cart item otherwise
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //3. (doesnt exist) return cart item with qty = 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItem = (cartItems, cartItemsToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemsToClear.id);
};
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return clearItem(cartItems, cartItemToRemove);
};
