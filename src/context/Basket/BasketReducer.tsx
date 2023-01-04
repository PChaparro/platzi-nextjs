import { TBasket, TBasketItem } from "./BasketContext";

type TAction = {
  type: "ADD" | "REMOVE";
  payload: TBasketItem;
};

export const basketReducer = (state: TBasket, action: TAction) => {
  const { payload } = action;

  switch (action.type) {
    case "ADD":
      const alreadyExists = state.some((item) => item.id === payload.id);

      if (alreadyExists) {
        return state.map((item) =>
          item.id === payload.id
            ? { ...item, amount: item.amount + payload.amount }
            : item
        );
      } else {
        return [...state, payload];
      }
    case "REMOVE":
      return state.filter((item) => item.id !== payload.id);
    default:
      return state;
  }
};
