import React from 'react';

const GroupList = ({ groups }) => {
  return (
    <div>
      {Object.keys(groups).map(groupName => (
        <div key={groupName}>
          <h3>{groupName}</h3>
          <ul>
            {groups[groupName].map(student => (
              <li key={student.student_id}>
                <p>Student ID: {student.student_id}</p>
                <p>Name: {student.first_name} {student.last_name}</p>
                <p>Age: {student.age}</p>
                <p>Gender: {student.gender}</p>
                <p>Score: {student.score}</p>
                <p>Cluster: {student.cluster}</p>
                <p>Group: {student.group}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GroupList;
