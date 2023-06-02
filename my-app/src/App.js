import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";

export default function App() {
  return (
    <>
      <Header />
      <Note title="Fezaan" content="Is a noob" />
      <Footer></Footer>
    </>
  );
}
