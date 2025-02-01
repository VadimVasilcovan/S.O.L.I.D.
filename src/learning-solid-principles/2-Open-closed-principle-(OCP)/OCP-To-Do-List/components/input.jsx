export default function Input({ value, InputState }) {
    const handleChange = (e) => {
      InputState(e.target.value); // Correct function call
    };
  
    return (
      <span>
        <input onChange={handleChange} value={value} />
      </span>
    );
  }
  