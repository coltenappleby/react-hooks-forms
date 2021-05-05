import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    event.preventDefault()
    
    setFirstName(event.target.value)
    console.log(firstName)
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value)
  }

 
  return (
    <form>
      <input onChange = {handleFirstNameChange}  type="text" value={firstName} />
      <input onChange = {handleLastNameChange} type="text" value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
