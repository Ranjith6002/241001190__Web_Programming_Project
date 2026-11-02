const ITEMS = [
  ["home", "Home"],
  ["shelf", "Shelf"],
  ["visit", "Visit"],
];

export default function Nav({ page, setPage }) {
  return (
    <nav>
      <div className="wrap">
        <span className="brand">Margin Notes</span>
        <div className="links">
          {ITEMS.map(([key, label]) => (
            <button
              key={key}
              aria-current={page === key ? "page" : undefined}
              onClick={() => setPage(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
