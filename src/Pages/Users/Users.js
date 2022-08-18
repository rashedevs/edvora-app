import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://assessment.api.vweb.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
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
