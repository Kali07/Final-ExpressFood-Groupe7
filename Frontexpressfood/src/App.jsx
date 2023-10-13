import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Autocomplete from "./components/Autocomplete";
import Modals from "./components/Modals";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="app-container">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 mt-20 w-full">
        <h1 className="text-5xl font-bold">
          Vos plats préférés, directement à <br /> votre porte{" "}
        </h1>
        <Autocomplete openModal={openModal} />
        <small>
          <a className="underline" href="#">
            Connexion
          </a>{" "}
          pour afficher vos adresses récentes
        </small>
      </div>
      {isModalOpen && <Modals closeModal={closeModal} />}
    </div>
  );
}

export default App;
