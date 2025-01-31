// Open/Close Principle should be open for extension, but closed for modification.
//This button doesn't care what action it performs—it just executes the onClick function passed to it.

const Button = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
