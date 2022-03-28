
export default function Button({ children }) {
  return (
    <button
      style={{
        margin: "10em",
        borderRadius: "8em",
        border: "3rem solid teal",
        padding: "3em 3em 3em 3em",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
