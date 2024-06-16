import React from 'react';
import { useLocation } from 'react-router-dom';
import GroupList from './GroupList';
import './GroupList.css';

const Display = () => {
  const location = useLocation();
  console.log(location.state);
  
  const { response } = location.state || {};
  const groups = response ? response.groups : null;

  if (!groups) {
    return <p>No groups data available</p>;
  }

  return (
    <div>
      <h1>Groups</h1>
      <div className='productContainer'>
        <GroupList groups={groups} />
      </div>
    </div>
  );
};

export default Display;
