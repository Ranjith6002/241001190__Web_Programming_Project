import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Shelf from "./components/Shelf.jsx";
import Visit from "./components/Visit.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Nav page={page} setPage={setPage} />
      <main>
        <div className="wrap">
          {page === "home" && (
            <>
              <Home setPage={setPage} />
              <Shelf />
            </>
          )}
          {page === "shelf" && <Shelf />}
          {page === "visit" && <Visit />}
        </div>
      </main>
      <Footer />
    </>
  );
}
