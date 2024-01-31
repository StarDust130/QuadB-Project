"use client";

import Loading from "@/app/_components/Loading";
import ShowDetails from "@/app/_components/ShowDetails";
// ProjectDetail.js

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
  }, [id]);

  if (!showDetails) {
    // You can show a loading indicator or handle the loading state as needed
    return <Loading />;
  }

  // Render your detail page content using showDetails

  return (
    <div>
      <ShowDetails showData={showDetails} />
    </div>
  );
};

export default ProjectDetail;
