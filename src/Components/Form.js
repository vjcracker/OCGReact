import React from "react";

const Form = () => {
  return (
    <>
      <form>
        <div className="form-group">
          <label for="inputUserQuery">Dear OCE enter your query</label>
          <input
            type="text"
            className="form-control"
            id="inputUserQuery"
            aria-describedby="emailHelp"
            placeholder="What is MTTM?"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
