import React, { useEffect, useState } from "react";
import { useLastFM } from "use-last-fm";

export default function CurrentlyListeningComponent() {
  const lastFM = useLastFM("shakhzodk", "2a9fac05d3f9fa7bacdc86d9f6856819");

  if (lastFM.status !== "playing") {
    return <p>currently i am not listening to anything.</p>;
  }

  return (
    <p>
      currently i am listening to{" "}
      <a href={lastFM.song.url} target="_blank" rel="noreferrer">
        {lastFM.song.name.toLowerCase()}
      </a>{" "}
      by {lastFM.song.artist.toLowerCase()}
    </p>
  );
}
