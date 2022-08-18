import Table from "react-bootstrap/Table";
import useData from "../Hooks/useData";
import User from "./User";

const Users = () => {
  const [users] = useData("https://assessment.api.vweb.app/users");
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
