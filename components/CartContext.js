import { createContext, useContext } from 'react';

const CartContext = createContext();

export function CartWrapper({ children }) {
  let sharedState = {/* whatever you want */}

  return (
    <CartWrapper.Provider value={sharedState}>
      {children}
    </CartWrapper.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
