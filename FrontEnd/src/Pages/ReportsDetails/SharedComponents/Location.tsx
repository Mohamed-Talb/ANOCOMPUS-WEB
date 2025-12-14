import IconLocation from "./Icons"

export default function Location({ location }: { location?: string }) {
  if (!location) return null;

  return (
    <span className="location-text">
      <IconLocation />
      {location}
    </span>
  );
}
