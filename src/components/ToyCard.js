import React from "react";

function ToyCard({ onDeleteToy, toy }) {
  const { id, name, image, likes } = toy;

  function deleteToy() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(() => onDeleteToy(id))
      .catch((error) => console.error('Error deleting toy:', error));
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={deleteToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
