import "./BookForm.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";
import {
  setAddBooks,
  fetchBook,
  selectIsLoadingViaAPI,
} from "../../redux/Slices/booksSlice";
import booksData from "../../data/books.json";
import createBookWithID from "../../Utils/createBookWithID";
import { setError } from "../../redux/Slices/errorSlice";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI);
  const dispatch = useDispatch();

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length); // получаем один рандомный элемент из массива
    const randomBook = booksData[randomIndex];

    const randomBookWithID = createBookWithID(randomBook, "random"); //добавляем айди к объекту

    dispatch(setAddBooks(randomBookWithID));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      const book = createBookWithID({ title, author }, "manual");

      dispatch(setAddBooks(book));

      setTitle("");
      setAuthor("");
    } else {
      dispatch(setError("You must fill title and author"));
    }
  };

  const handleAddRandomBookAPI = () => {
    dispatch(fetchBook("http://localhost:4000/random-book-delayed"));
  };

  return (
    <div className="book-form app-block">
      <h2>Add new book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add random
        </button>

        <button
          type="button"
          onClick={handleAddRandomBookAPI}
          disabled={isLoadingViaAPI}
        >
          {isLoadingViaAPI ? (
            <>
              <span>Loading book...</span>
              <FaSpinner className="spinner" />
            </>
          ) : (
            "Add random via API"
          )}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
