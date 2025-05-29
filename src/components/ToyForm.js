import React, { useEffect } from "react";

function ToyForm() {
  const [newToy, setNewToys] = React.useState([]);

  const toyObject = {
    toys: {
      name: "New Toy",
      image: "https://example.com/toy.jpg",
    }
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        toyObj: toyObject
      }),
    })
      .then((response) => response.json())
      .then((toys) => setNewToys((toy) => [...toys, newToy]))
      .catch((error) => console.error("Error creating toy:", error));
  }, [])

  return (
    <div className="container">
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
