import { icons } from 'lucide-react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  text: string;
  className?: string;
  onClick?: () => void;
  iconClassName?: string;
  iconName?: keyof typeof icons;
  iconSize?: number;
  iconColor?: string;
}

export function Button({ type, text, className = 'px-4 py-2 bg-green-700 text-white rounded-md', onClick, iconClassName, iconName, iconSize, iconColor }: ButtonProps) {
  const defaultIconClassName = 'inline-block  mr-2';
  const LucideIcon = iconName ? icons[iconName] : undefined;

  return (
    <button type={type} className={className} onClick={onClick}>
      {LucideIcon && <LucideIcon className={iconClassName || defaultIconClassName} color={iconColor} size={iconSize} />}
      {text}
    </button>
  );
}
