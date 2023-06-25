'use client';

import React from 'react';

interface AuthErrorsProps {
  errors: { [key: string]: string[] };
}

export default function AuthErrors({ errors }: AuthErrorsProps) {
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
