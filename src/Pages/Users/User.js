import React from "react";

const User = ({ user }) => {
  const { user_id, name } = user;
  return (
    <tr>
      <td>{user_id}</td>
      <td>{name}</td>
    </tr>
  );
};

export default User;
