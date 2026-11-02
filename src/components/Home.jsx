export default function Home({ setPage }) {
  return (
    <section className="hero">
      <span className="eyebrow">Independent bookshop · since 2019</span>
      <h1>Books worth writing in the margins of.</h1>
      <p>
        A small shop with a short, opinionated shelf. Every book here has been
        read by someone on staff, and each one comes with a note on why we keep it.
      </p>
      <button className="cta" onClick={() => setPage("shelf")}>
        Browse the shelf
      </button>
    </section>
  );
}
