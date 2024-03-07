interface TitleProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  title: string;
}

export function Title({level, title}: TitleProps){
  const HeadingTag = level
  return (
     <HeadingTag className="font-bold">
      {title}
    </HeadingTag>
  )
}
