import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import Search from "./pages/Search";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/search" element={<Search />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </>
  );
}

export default App;