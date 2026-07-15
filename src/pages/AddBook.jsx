import { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const { dispatch } = useContext(BookContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      title,
      author,
      description
    };

    dispatch({ type: "ADD_BOOK", payload: newBook });

    navigate("/");
  };

  return (
    <div className="container">
      <h2>ADD BOOK </h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} required /><br />
        <input placeholder="Author" onChange={(e) => setAuthor(e.target.value)} required /><br />
        <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} required /><br />
        <button type="submit">ADD</button><br />
      </form>
    </div>
  );
}

export default AddBook;