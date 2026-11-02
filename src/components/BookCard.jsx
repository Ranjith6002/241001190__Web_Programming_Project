export default function BookCard({ book, saved, onToggle }) {
  return (
    <article className="book">
      <div className="meta">
        <span>{book.genre}</span>
        <span>₹{book.price}</span>
      </div>
      <h3>{book.title}</h3>
      <div className="meta">
        <span>{book.author}</span>
      </div>
      <p className="note">{book.note}</p>
      <button aria-pressed={saved} onClick={() => onToggle(book.id)}>
        {saved ? "Saved ✓" : "Save for later"}
      </button>
    </article>
  );
}
