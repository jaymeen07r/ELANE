import Hero from "./Hero";
import "./App.css";
import Navbar from "./Navbar";
import Info from "./Info";
import Collections from "./Collections";
import Atmosphere from "./Atmosphere";
import TheCraft from "./TheCraft";
import Archive from "./Archive";
import TheObject from "./TheObject";
import Finale from "./Finale";
import { Routes, Route } from "react-router-dom";

import SiteCredits from "./SiteCredits";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Collections />
      <Atmosphere />
      <TheCraft />
      <Archive />
      <TheObject />
      <Finale />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/credits"
        element={<SiteCredits />}
      />
    </Routes>
  );
}