import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddUser = () => {
  const [uId, setUId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hairColor, setHairColor] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    const newUser = {
      uId,
      name,
      age,
      hairColor,
    };
    e.preventDefault();

    fetch("http://localhost:8000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    navigate("/", { replace: true });
  };

  return (
    <>
      <Link to="/">Home</Link>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input
          type="number"
          name="id"
          placeholder="id"
          value={uId}
          onChange={(e) => setUId(e.target.value)}
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="hairColor">Hair Color</label>
        <input
          type="text"
          name="hairColor"
          placeholder="hair color"
          value={hairColor}
          onChange={(e) => setHairColor(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddUser;
