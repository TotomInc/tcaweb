interface Props {
  children: React.ReactNode;
}

export function Badge({ children }: Props) {
  return (
    <span className="font-heading mx-auto mb-5 block w-fit rounded-lg border border-blue-300 bg-blue-100 px-3 py-1.5 text-center text-sm leading-4 font-semibold tracking-tight uppercase">
      <span className="bg-gradient-to-b from-blue-500 to-blue-700 bg-clip-text text-transparent">
        {children}
      </span>
    </span>
  );
}
