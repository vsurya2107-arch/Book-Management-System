import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { Link } from "react-router-dom";

function BookList() {
  const { state, dispatch } = useContext(BookContext);

  return (
    <div className="grid">
      {state.books.map((book) => (
        <div key={book.id} className="card">
          <h3>{book.title}</h3>
          <p>{book.author}</p>

          <Link to={`/book/${book.id}`}>View</Link>

          <button onClick={() => dispatch({ type: "DELETE_BOOK", payload: book.id })}>
            DELECT
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookList;