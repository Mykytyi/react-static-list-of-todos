import React from 'react';
import {users} from '../users';
import User from './User';

function TodoItem(props) {
  const user = users.find(function(item) {
    return item["id"] === props["userId"]
  });

  return (
    <tr key={props["title"]}>
      <td>{props["title"]}</td>
      <td>{props["userId"]}</td>
      <td className="completed">{props["completed"].toString()}</td>
      <User userObj={user}/>
    </tr>
  );
}

export default TodoItem;
