"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTv,
  faClock,
  faStar,
  faGlobe,
  faCalendarAlt,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "./Breadcrumb";
import Link from "next/link";

import BookButton from "./BookButton";

const ShowDetails = ({ showData }: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  const {
    name,
    network,
    premiered,
    rating,
    runtime,
    schedule,
    status,
    summary,
    url,
    image,
    language,
    id,
    averageRuntime,
    genres,
    type,
    webChannel,
    officialSite,
  } = showData;

  return (
    <div className="min-h-screen flex items-center justify-center mb-20">
      <div className="max-w-6xl w-full flex  flex-col lg:flex-row rounded-lg overflow-hidden">
        <div className="md:w-1/2 w-full h-full ">
          <Breadcrumb id={id} />
          {loading ? (
            <Skeleton className="w-full h-[1000px] rounded-l-lg" />
          ) : (
            <Image
              src={image?.original || "/no-img.jpeg"}
              alt={`${name} Poster`}
              className="object-fill md:h-1/2 w-full rounded-l-lg"
              width={300}
              height={300}
              loading="lazy"
            />
          )}
        </div>
        <div className="w-full lg:w-1/3 p-8 rounded-r-lg  md:ml-20">
          <h1 className="text-4xl font-bold mb-4">{name}</h1>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faTv} className="mr-2" />
            <span>ID: {id}</span>
          </div>
          <BookButton
            name={name}
            rating={rating?.average || "N/A"}
            language={language}
            averageRuntime={averageRuntime}
            genres={genres}
            img={image?.original || "/no-img.jpeg"}
          />
          <div
            className="mb-6 mt-3 overflow-auto"
            dangerouslySetInnerHTML={{ __html: summary }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
            <span className="text-sm">
              <DetailWithIcon
                icon={faGlobe}
                label="Network"
                value={network?.name || "N/A"}
              />
            </span>
            <DetailWithIcon
              icon={faCalendarAlt}
              label="Premiered"
              value={premiered || "N/A"}
            />
            <DetailWithIcon
              icon={faStar}
              label="Rating"
              value={rating?.average || "N/A"}
            />
            <DetailWithIcon
              icon={faClock}
              label="Runtime"
              value={runtime || "N/A"}
            />
            <DetailWithIcon
              icon={faClock}
              label="Average Runtime"
              value={averageRuntime || "N/A"}
            />
            <DetailWithIcon
              icon={faCalendarAlt}
              label="Type"
              value={type || "N/A"}
            />
            <DetailWithIcon
              icon={faLanguage}
              label="Language"
              value={language || "N/A"}
            />
            <DetailWithIcon
              icon={faCalendarAlt}
              label="Status"
              value={status || "N/A"}
            />
            <DetailWithIcon
              icon={faCalendarAlt}
              label="Genres"
              value={genres?.join(", ") || "N/A"}
            />
            <DetailWithIcon
              icon={faTv}
              label="Web Channel"
              value={webChannel?.name || "N/A"}
            />
          </div>
          <div className="mt-6">
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              More info
            </Link>
          </div>
          {officialSite && (
            <div className="mt-4">
              <Link
                href={officialSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 underline"
              >
                Official Site
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const DetailWithIcon = ({ icon, label, value }: any) => (
  <div className="flex items-center">
    <FontAwesomeIcon icon={icon} className="mr-2 text-blue-500" />
    <span className="font-bold">{label}:</span>
    <span className="text-xs ml-2">{value}</span>
  </div>
);

export default ShowDetails;
