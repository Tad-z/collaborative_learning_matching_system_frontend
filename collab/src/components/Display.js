import React from 'react';
import { useLocation } from 'react-router-dom';
import GroupList from './GroupList'; // Adjust the import path as needed

const Display = () => {
  const location = useLocation();
  console.log(location.state)
  const { response } = location.state || {};

  const { groups } = response

  if (!groups) {
    return <p>No groups data available</p>;
  }

  return (
    <div>
      <h1>Groups</h1>
      <GroupList groups={groups} />
    </div>
  );
};

export default Display;
