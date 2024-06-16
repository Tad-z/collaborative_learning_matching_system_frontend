import React from 'react';
import './GroupList.css';

const GroupList = ({ groups }) => {
  return (
    <div className="productContainer">
      {Object.keys(groups).map(groupName => (
        <div key={groupName} className="card">
          <h3>{groupName}</h3>
          <ul>
            {groups[groupName].map(student => (
              <li key={student.student_id}>
                <p>{student.first_name} {student.last_name}: {parseFloat(student.score).toFixed(1)}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GroupList;


