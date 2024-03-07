import React from 'react';
import { Button } from './Button';

export interface ModalProps {
  title: string;
  body: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export function Modal({ title, body, onCancel, onConfirm }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center text-indigo-950 bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold text-violet-600 mb-4">{title}</h2>
        <p className="mb-8">{body}</p>
        <div className="flex justify-end">
          <Button type={'button'} text={'Cancelar'} className="mr-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={onCancel}/>
          {/* <button className="mr-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={onCancel}>
            Cancelar
          </button> */}
                    <Button type={'button'} text={'Confimar'} className="mr-4 px-4 py-2 bg-indigo-800 text-white rounded hover:bg-red-600" onClick={onConfirm}/>

          {/* <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={onConfirm}>
            Confirmar
          </button> */}
        </div>
      </div>
    </div>
  );
}
