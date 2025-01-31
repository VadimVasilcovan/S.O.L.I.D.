import React from "react";
import Button from "./index-1";

const ButtonAction = () => {
  const handleSubmit = () => alert("From submitted!");
  const handleDelete = () => alert("Item deleted!");
  const handleDownload = () => alert("File downloaded!");

  return (
    <div>
      <h2></h2>
      <Button onClick={handleSubmit} label="Submit" />
      <Button onClick={handleDelete} label="Delete" />
      <Button onClick={handleDownload} label="Download" />
    </div>
  );
};

export default ButtonAction;
