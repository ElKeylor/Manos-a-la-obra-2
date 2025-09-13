export default function Checkbox({ checked = false, onChange }) {
  return <input type="checkbox" checked={checked} onChange={onChange} />;
}
