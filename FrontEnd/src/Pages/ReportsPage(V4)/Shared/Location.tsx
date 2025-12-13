import React from "react";
import IconLocation from "./IconLocation";

interface LocationProps {
  location?: string;
}

export default function Location({ location }: LocationProps) {
  if (!location) return <span>Unknown</span>;
  return (
    <span className="location-text">
      <IconLocation /> {location}
    </span>
  );
}
