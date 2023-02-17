import React, { useState } from "react";
import axios from "axios";

const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [botResponse, setBotResponse] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make API call with the input value here
    axios
      .get(`https://oncallgenie.azurewebsites.net/api/oncallgenie?query=${inputValue}`)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.message);
        setBotResponse(response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="inputUserQuery">Dear OCE enter your query</label>
          <input
            type="text"
            className="form-control"
            id="inputUserQuery"
            aria-describedby="emailHelp"
            placeholder="What is MTTM?"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {botResponse !== "" ? (
        <p className="mt-4">Bot Repsonse: {botResponse}</p>
      ) : (
        <p className="mt-4">Bot Repsonse:</p>
      )}
    </>
  );
};

export default InputForm;
