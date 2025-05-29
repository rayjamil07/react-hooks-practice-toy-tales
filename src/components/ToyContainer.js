import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ onDeleteToy, onLikeToy, toys = [] }) {
  const toyCard = toys.map((toy) => {
    return <ToyCard
      toy={toy}
      key={toy.id}
      onDeleteToy={onDeleteToy}
      onLikeToy={onLikeToy}
    />
  })

  return (
    <div id="toy-collection">{toyCard}</div>
  );
}

export default ToyContainer;
