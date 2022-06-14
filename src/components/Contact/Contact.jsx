import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

export const UserForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = (event) => {
    if (data.name.length + 1 < 3) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("sending data..." + data.name + " " + data.email);
    saveResults(data);
    clearState();
    setMessage("form completed sucessfuly");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="contact">Contact form</h1>
      <input className="name"
        type="text"
        placeholder="name"
        value={data.name}
        onChange={handleInputChange}
        name="name"
      />

      <input className="email"
        type="email"
        placeholder="email"
        value={data.email}
        onChange={handleInputChange}
        name="email"
      />
      <input className="message"
        type="textarea"
        placeholder="write something here"
        value={data.message}
        onChange={handleInputChange}
        name="message"
      />

      <button className="button" type="submit" disabled={btnDisabled}>
        Submit
      </button>
      {message}
    </form>
  );
};
export default UserForm;

function getSavedData() {
  const usersDb = localStorage.getItem("results"); //traemos la informacion del local storage a un var
  const dataArray = JSON.parse(usersDb) || [];
 // const  Object.entries(dataObject); //creating var to store. necessary step to translate to js
  return dataArray;
}
getSavedData();
function saveResults(data) {
  const database = {
    name: data.name,
    email: data.email,
    message: data.message,
  }; //the result of a function saved in a variable

  const lc = getSavedData()
  const ls = lc.push(database);
  console.log("this is lc ",lc);
  localStorage.setItem("results", JSON.stringify(lc)); //pushing infoOfUsers to database array
  //localStorage.setItem("results", JSON.stringify(database)); // puts data back into local storage
}
