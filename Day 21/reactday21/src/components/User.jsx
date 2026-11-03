import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return (
    <div className="page">
      <h1>User Page</h1>
      <p>User ID: {id}</p>
    </div>
  );
}

export default User;