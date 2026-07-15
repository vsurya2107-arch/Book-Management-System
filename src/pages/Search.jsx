import { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

function Search() {
  const { state } = useContext(BookContext);
  const [search, setSearch] = useState("");

  const filteredBooks = state.books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>SEARCH BOOKS</h2>
      <SearchBar search={search} setSearch={setSearch} />

      {filteredBooks.map((book) => (
        <div key={book.id}>
          <Link to={`/book/${book.id}`}>{book.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Search;