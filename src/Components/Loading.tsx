import { icons } from 'lucide-react';

interface LoadingProps {
  iconName?: keyof typeof icons;
  iconSize?: number;
  iconColor?: string;
  iconClassName?: string;
}


export const Loading = ({iconClassName, iconName, iconSize, iconColor} : LoadingProps) => {
  const defaultIconClassName = "text-gray-500 animate-spin"
  const LucideIcon = iconName ? icons[iconName] : undefined;
  return (
    <div className="flex justify-center items-center h-64">
      {LucideIcon && <LucideIcon className={iconClassName || defaultIconClassName} color={iconColor} size={iconSize} />}
    </div>
  );
};
