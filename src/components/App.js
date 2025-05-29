import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const API = "http://localhost:3001/toys";

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then((toys) => setToys(toys));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(toyObj) {
    setToys([...toys, toyObj]);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} onAddToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} />
    </>
  );
}

export default App;
