export default function Input({ value, InputState }) {
    const handleChange = (e) => {
      InputState(e.target.value); 
    };
  
    return (
      <span>
        <input onChange={handleChange} value={value} />
      </span>
    );
  }
  