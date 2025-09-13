export default function Input({ value, onChange, placeholder = '', className = '' }) {
  return (
    <input
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}