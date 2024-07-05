import React from 'react';
import { useLocation } from 'react-router-dom';
import GroupList from './GroupList';
import './GroupList.css';
import HeaderAuth from './HeaderDisplay';

const Display = () => {
  const location = useLocation();
  console.log(location.state);

  const { response } = location.state || {};
  const title = response ? response.title : null;
  const groups = response ? response.groups : null;

  if (!groups) {
    return <p>No groups data available</p>;
  }

  return (
    <div>
      <HeaderAuth title={title} />
      <h1 className='text-2xl font-bold text-center my-6'>Groups</h1>
      <div className='productContainer'>
        <GroupList groups={groups} />
      </div>
    </div>
  );
};

export default Display;
