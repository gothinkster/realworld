interface FieldProps {
  name: string;
  type: string;
  placeholder: string;
}

export default function Field({ name, type, placeholder }: FieldProps) {
  return (
    <fieldset className="form-group">
      <input
        name={name}
        className="form-control form-control-lg"
        type={type}
        placeholder={placeholder}
      />
    </fieldset>
  );
}
