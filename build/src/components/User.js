import React from 'react';

function Users(props) {
  return (
    <React.Fragment>
      <td>{props.userObj['name']}</td>
      <td>{props.userObj['email']}</td>
    </React.Fragment>
  );
}

export default Users;
