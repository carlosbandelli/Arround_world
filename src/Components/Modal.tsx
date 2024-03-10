import { icons } from 'lucide-react';

import { Button } from './Button';

export interface ModalProps {
  title: string;
  body: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  textButton1?: string;
  textButton2?: string;
  className1?: string;
  className2?: string;
  iconName1?:  keyof typeof icons;
  iconName2?:  keyof typeof icons;
  iconSize1?: number;
  iconSize2?: number;
  iconColor1?: string;
  iconColor2?: string;
  iconClass1?: string;
  iconClass2?: string;
  divButton?: string
}

export function Modal({ title, body, onCancel, onConfirm, textButton1, textButton2, className1, className2, iconName1, iconName2, iconSize1, iconSize2, iconColor1, iconColor2, iconClass1, iconClass2, divButton}: ModalProps) {
  const defaultClassName1 = "mr-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
  const defaultClassName2 = "mr-4 px-4 py-2 bg-indigo-800 text-white rounded hover:animate-pulse-slow"
  const defaultClassDivButton = "flex justify-end"
  return (
    <div className="fixed inset-0 flex items-center justify-center text-indigo-950 bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold text-violet-600 mb-4">{title}</h2>
        <p className="mb-8">{body}</p>
        <div className={divButton || defaultClassDivButton}>
          <Button type={'button'} text={textButton1 || ''} className={className1 || defaultClassName1} iconClassName={iconClass1} iconColor={iconColor1} iconName={iconName1} iconSize={iconSize1} onClick={onCancel}/>
          <Button type={'button'} text={textButton2 || ''} className={className2 || defaultClassName2} iconClassName={iconClass2} iconColor={iconColor2} iconName={iconName2} iconSize={iconSize2} onClick={onConfirm}/>
        </div>
      </div>
    </div>
  );
}

