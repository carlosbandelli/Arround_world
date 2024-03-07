import React from 'react';

interface InputProps {
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export function Input({ type, value, placeholder = 'Digite o nome do país', className = 'border border-gray-300 rounded-md px-4 py-2 text-black', onChange }: InputProps) {
  return (
    <input type={type} value={value} onChange={onChange} placeholder={placeholder} className={className} />
  );
}
