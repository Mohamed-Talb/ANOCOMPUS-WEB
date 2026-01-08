export default function UserHeader({
  firstname,
  lastname,
  location,
  date,
}: {
  firstname: string;
  lastname: string;
  location?: string;
  date?: string;
}) {
  return (
    <div className="flex items-center gap-3 flex-1">
      <div
        className="flex items-center justify-center rounded-full text-white font-semibold flex-shrink-0"
        style={{
          width: 48,
          height: 48,
          background: "linear-gradient(135deg,#667eea 0%,#764ba2 100%)",
          fontSize: 16,
        }}
      >
        {firstname.charAt(0)}
        {lastname.charAt(0)}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-sm text-[#ffffff]">
            {firstname} {lastname}
          </span>
          <span className="text-sm text-[#98989d]">is in</span>
        </div>
        {date && <span className="text-xs text-[#98989d]">{date}</span>}
      </div>
    </div>
  );
}