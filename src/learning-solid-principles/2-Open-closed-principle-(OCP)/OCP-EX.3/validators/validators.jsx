import React, { useState } from "react";
import Input from "../components/input";
import { required, isEmail, minLength } from "../components/form";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>Form Validation Example</h2>

      <Input
        value={email}
        onChange={setEmail}
        validate={isEmail}
        errorMessage="Please enter a valid email address."
      />

      <br />

      <Input
        value={password}
        onChange={setPassword}
        validate={minLength(6)}
        errorMessage="Password must be at least 6 characters long."
      />

      <br />

      <button
        onClick={() => alert("Form submitted!")}
        disabled={!required(email) || !required(password)}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
