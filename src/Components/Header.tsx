export function Header({ title }: { title: string }) {
  return (
    <div>
      <header className="text-center text-3xl font-bold">{title}</header>
    </div>
  );
}
