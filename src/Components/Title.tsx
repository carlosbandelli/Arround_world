interface TitleProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  title: string;
  classTitle?: string;
}

export function Title({ level, title, classTitle }: TitleProps) {
  const defaultClassName = "font-bold text-center text-3xl";
  const HeadingTag = level;

  return (
    <HeadingTag className={classTitle || defaultClassName}>
      {title}
    </HeadingTag>
  );
}
