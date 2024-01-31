"use client";

import React, { useState, useEffect } from "react";
import Card from "../_components/Card";
import { useRouter } from "next/navigation";

const MyCoolCardUI = () => {
  const [shows, setShows] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch data from the API
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

 const handleButtonClick = (showId: any) => {

   router.push(`/project/${showId}`);
 };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4">
      {shows.map(({ show }) => (
        <div key={show.id} className="mb-8 mx-auto max-w-screen-md">
          {" "}
         
          <div className="relative overflow-hidden transition-transform duration-300 transform hover:-translate-x-2 hover:translate-y-2">
            <Card
              title={show.name}
              score={show.score}
              imageSrc={show.image?.medium}
              summary={show.summary}
              rating={show.rating.average}
              language={show.language}
              id={show.id}
              averageRuntime={show.averageRuntime}
              onClick={()=>handleButtonClick(show.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCoolCardUI;
