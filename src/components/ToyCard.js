import React from "react";

function ToyCard({ onDeleteToy, onLikeToy, toy }) {
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

  function handleLike() {
    const updatedLikes = likes + 1;
    
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes: updatedLikes })
    })
      .then(response => response.json())
      .then((updatedToy) => onLikeToy(updatedToy))
      .catch((error) => console.error('Error updating likes:', error));
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
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={deleteToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
