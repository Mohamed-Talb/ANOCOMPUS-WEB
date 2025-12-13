import React from "react";
import Location from "./Location";
// import "../Styles/style.css";
interface UserHeaderProps 
{
  firstname: string;
  lastname: string;
  location?: string;
  date?: string;
}

export default function UserHeader({ firstname, lastname, location, date }: UserHeaderProps) {
  return (
    <div className="user-info">
      <div className="user-avatar">
        {firstname.charAt(0)}
        {lastname.charAt(0)}
      </div>
      <div className="user-details">
        <div className="user-name-line">
          <span className="user-name">{firstname} {lastname}</span>
          <span className="is-in-text">is in</span>
          <Location location={location} />
        </div>
        {date && <span className="report-date">{date}</span>}
      </div>
    </div>
  );
}
