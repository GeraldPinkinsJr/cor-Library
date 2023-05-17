import { useState } from "react";
import Book from "./Book";
import NewBookForm from "./NewBookForm";

const Shelf = (props) => {
  const [books, setBooks] = useState(props.books)

  const addBook = book => setBooks([...books, book])

  return (
    <section>
      <h2>{props.genre} </h2>
     <NewBookForm addBook={addBook}/>

      <section>
        {props.books.map((book,index) => (
          <Book key={index} title={book.title} author={book.author} />
        ))}
      </section>
      <hr />
    </section>
  );
};

export default Shelf;
