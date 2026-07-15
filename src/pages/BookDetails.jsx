import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

function BookDetails() {
  const { id } = useParams();
  const { state } = useContext(BookContext);

  const book = state.books.find((b) => b.id === Number(id));

  if (!book) return <h2>BOOK NOT FOUND</h2>;

  return (
    <div className="container">
      <h2>{book.title}</h2>
      <h4>{book.author}</h4>
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetails;