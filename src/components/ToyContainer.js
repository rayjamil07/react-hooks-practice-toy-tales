import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys = [] }) {
  const toyCard = toys.map((toy) => {
    return <ToyCard
      toys={toy}
      key={toy.id}
    />
  })

  return (
    <div id="toy-collection">{toyCard}</div>
  );
}

export default ToyContainer;
