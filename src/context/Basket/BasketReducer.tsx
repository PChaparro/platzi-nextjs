import { TBasket, TBasketItem } from "./BasketContext";

type TAction = {
  type: "ADD" | "REMOVE";
  payload: TBasketItem;
};

export const basketReducer = (state: TBasket, action: TAction) => {
  const { payload } = action;

  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((item) => item.id !== payload.id);
    default:
      return state;
  }
};
