"use client";

import Loading from "@/app/_components/Loading";
import ShowDetails from "@/app/_components/ShowDetails";

import { useEffect, useState } from "react";

const ProjectDetail = ({ params }: any) => {
  const id = params.projectId;

  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    // Fetch specific show details based on the ID
    if (id) {
      fetch(`https://api.tvmaze.com/shows/${id}`)
        .then((response) => response.json())
        .then((data) => setShowDetails(data))
        .catch((error) => console.error("Error fetching show details:", error));
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!showDetails) {
    return <Loading />;
  }

  return (
    <div>
      <ShowDetails showData={showDetails} />
    </div>
  );
};

export default ProjectDetail;
