import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, payload] };
    case "DELETE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };
    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload ? { ...item, amount: item.amount + 1 } : item
        ),
      };
    case "DECREASE":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload ? { ...item, amount: item.amount - 1 } : item
        ),
      };
    case "CLEAR":
      return {
        ...state,
        cart: [],
        totalPrice: 0,
        totalAmount: 0,
      };
    case "CALCULATE_TOTAL":
      const { totalAmount, totalPrice } = state.cart.reduce(
        (acc, curVal) => {
          const { amount, price } = curVal;
          acc.totalAmount += amount;
          acc.totalPrice += amount * price;
          return acc;
        },
        {
          totalPrice: 0,
          totalAmount: 0,
        }
      );
      return {
        ...state,
        totalAmount,
        totalPrice,
      };
    case "LOGIN":
      return {
        ...state,
        user: state.userData,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    cart: [],
    totalPrice: 0,
    totalAmount: 0,
    user: null,
    userData: {
      displayName: "asadbek",
      email: "qw@a",
      password: "1212",
      photoURL: "https://picsum.photos/200/300",
    },
  });

  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL" });
    localStorage.setItem("cart", JSON.stringify({ cart: state.cart }));
  }, [state.cart]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
