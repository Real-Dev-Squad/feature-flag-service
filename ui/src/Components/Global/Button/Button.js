export default function Button({ text, onClick, className}) {
  return (
    <button
      className={`py-2 px-4 rounded-lg ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
};