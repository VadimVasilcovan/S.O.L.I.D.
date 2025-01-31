const Notification = ({ message, type }) => {
  const colors = {
    success: "green",
    error: "red",
    warning: "yellow",
    info: "blue",
  };

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: colors[type] || "gray",
        color: "white",
        borderRadius: "5px",
        margin: "10px 0",
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
