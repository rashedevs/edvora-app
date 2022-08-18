import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://assessment.api.vweb.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);
  return (
    <div className="p-4">
      <Table bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user?.user_id} user={user}></User>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
