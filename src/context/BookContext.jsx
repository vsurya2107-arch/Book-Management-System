import { createContext, useReducer, useEffect } from "react";

export const BookContext = createContext();

const initialState = {
  books: JSON.parse(localStorage.getItem("books")) || []
};

function bookReducer(state, action) {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload]
      };

    case "DELETE_BOOK":
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload)
      };

    default:
      return state;
  }
}

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(state.books));
  }, [state.books]);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};