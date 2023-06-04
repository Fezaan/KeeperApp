import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import notes from "./notes";

export default function App() {
  return (
    <>
      <Header />
      {notes.map((palet) => (
        <Note key={palet.key} title={palet.title} content={palet.content} />
      ))}
      <Footer></Footer>
    </>
  );
}
