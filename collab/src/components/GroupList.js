import React from 'react';
import './GroupList.css';

const GroupList = ({ groups }) => {
  return (
    <div>
      {Object.keys(groups).map(groupName => (
        <div key={groupName} className="card">
          <h3>{groupName}</h3>
          <ul>
            {groups[groupName].map(student => (
              <li key={student.student_id}>
                <p>Name: {student.first_name} {student.last_name}</p>
                {/* Uncomment the below lines if you want to display more details */}
                {/* <p>Age: {student.age}</p>
                <p>Gender: {student.gender}</p>
                <p>Score: {student.score}</p>
                <p>Cluster: {student.cluster}</p>
                <p>Group: {student.group}</p> */}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GroupList;
