export default function UserHeader(
{firstname,lastname,location,date,}: {
  firstname: string;
  lastname: string;
  location?: string;
  date?: string;
}) {
  return (
    <div className="user-info">
      <div className="user-avatar">
        {firstname.charAt(0)}
        {lastname.charAt(0)}
      </div>
      <div className="user-details">
        <div className="user-name-line">
          <span className="user-name">
            {firstname} {lastname}
          </span>
          <span className="is-in-text">is in</span>
        </div>
        {date && <span className="report-date">{date}</span>}
      </div>
    </div>
  );
}