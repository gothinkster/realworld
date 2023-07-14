import React from 'react';

interface Props {
  errors: { [key: string]: string[] };
}

export default function AuthErrors({ errors }: Props) {
  return (
    <ul className="error-messages">
      {Object.entries(errors).map(([field, fieldErrors]) =>
        fieldErrors.map(fieldError => (
          <li key={field + fieldError}>
            {field} {fieldError}
          </li>
        )),
      )}
    </ul>
  );
}
