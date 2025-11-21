export default function Button({ backgroundColor, color, onClick, children }) {
  return (
    <button style={{ backgroundColor, color }} onClick={onClick}>
      {children}
    </button>
  );
}
