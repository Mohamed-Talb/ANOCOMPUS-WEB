import {IconLocation} from "../../../Common/icons/Icons"

export default function Location({ location }: { location?: string }) {
  if (!location) return null;
  return (
    <span className="inline-flex items-center gap-2 text-sm text-[#c7c7cc]">
      <IconLocation />
      {location}
    </span>
  );
}
