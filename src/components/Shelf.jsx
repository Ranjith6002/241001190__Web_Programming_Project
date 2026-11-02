import { useState } from "react";
import BookCard from "./BookCard.jsx";
import { BOOKS, GENRES } from "../data/books.js";

export default function Shelf() {
  const [genre, setGenre] = useState("All");
  const [saved, setSaved] = useState([]);

  const shown = genre === "All" ? BOOKS : BOOKS.filter((b) => b.genre === genre);

  const toggle = (id) =>
    setSaved((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  return (
    <section className="stack">
      <div>
        <span className="eyebrow">{saved.length} saved for later</span>
        <h2>On the shelf</h2>
      </div>
      <div className="filters">
        {GENRES.map((g) => (
          <button
            key={g}
            className="chip"
            aria-pressed={genre === g}
            onClick={() => setGenre(g)}
          >
            {g}
          </button>
        ))}
      </div>
      <div className="shelf">
        {shown.map((b) => (
          <BookCard
            key={b.id}
            book={b}
            saved={saved.includes(b.id)}
            onToggle={toggle}
          />
        ))}
      </div>
    </section>
  );
}
