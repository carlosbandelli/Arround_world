import React from 'react';

interface FormProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  children?: React.ReactNode;
}

export function Form({ onSubmit, children }: FormProps) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      await onSubmit(event);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center space-x-3">
      {children}
    </form>
  );
}
