import { useState } from "react";
import Shelf from "./Shelf";

const Library = () => {
  const [shelves, setShelves] = useState([
    {
      genre: "Fiction",
      books: [
        { title: "To Kill a Mockingbird", author: "Harper Lee" },
        { title: "1984", author: "George Orwell" },
      ],
    },
    {
      genre: "Non-Fiction",
      books: [
        { title: "Sapiens", author: "Yuval Noah Harari" },
        { title: "Homo Deus", author: "Yuval Noah Harari" },
      ],
    },
  ]);
  return (
    <section>
      {shelves.map((shelf, index) => (
        <Shelf key={index} genre={shelf.genre} books={shelf.books} />
      ))}
    
    </section>
  );
};

export default Library;
