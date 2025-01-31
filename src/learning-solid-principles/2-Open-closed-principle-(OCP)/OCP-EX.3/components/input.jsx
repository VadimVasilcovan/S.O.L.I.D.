import React from "react";

const Input = ({ value, onChange, validate, errorMessage }) => {
  const handleBlur = () => {
    if (validate && !validate(value)) {
      alert(errorMessage || "invalid input");
    }
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        noBlur={handleBlur}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      />
    </div>
  );
};

export default Input;
