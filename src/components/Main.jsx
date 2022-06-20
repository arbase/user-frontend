import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Link to="/add">Add User</Link>
      {data?.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.age}</p>
            <p>{user.hairColor}</p>
          </div>
        );
      })}
    </>
  );
};

export default Main;
