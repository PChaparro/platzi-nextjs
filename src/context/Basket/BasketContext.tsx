import { createContext, useReducer } from "react";
import { basketReducer } from "./BasketReducer";

export type TBasketItem = TProduct & { amount: number };
export type TBasket = Array<TBasketItem>;

const contextInitialValue = {
  basket: [] as TBasket,
  addToBasket: (item: TBasketItem) => {},
};

export const BasketContext = createContext(contextInitialValue);

export const BasketProvider = ({ children }) => {
  const [basket, basketDispatcher] = useReducer(
    basketReducer,
    contextInitialValue.basket
  );

  const addToBasket = (item: TBasketItem) => {
    basketDispatcher({ type: "ADD", payload: item });
  };

  return (
    <BasketContext.Provider value={{ basket: [], addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
