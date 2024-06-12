import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import "./Login.css"; // Ensure you have appropriate styles

const Display = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.state)
  // Ensure you have data before trying to access it
  const { response } = location.state || {};

  if (!response) {
    navigate("/upload"); // Redirect to upload if no response data
    return null;
  }

  const { title, groupings } = response;

  return (
    <div className="body">
      <Header title="Group Display" />
      <div className="container">
        <h1 className="h1">Groupings for: {title}</h1>
        <div className="groupings">
          {Object.keys(groupings).map((group, index) => (
            <div key={index} className="group">
              <h2 className="group-title">Group {group}</h2>
              <ul className="group-members">
                {groupings[group].map((member, i) => (
                  <li key={i} className="group-member">
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Display;
