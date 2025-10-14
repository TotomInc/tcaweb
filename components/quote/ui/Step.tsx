/* eslint-disable react-refresh/only-export-components */
function Container({ children }: { children: React.ReactNode }) {
  return <div className="space-y-6">{children}</div>;
}

function Label({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3 className="text-base font-semibold lg:text-lg">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}

function Error({ message }: { message: string }) {
  return <p className="-mt-4 text-xs font-medium tracking-tight text-red-600">{message}</p>;
}

function Footer({ children }: { children: React.ReactNode }) {
  return <div className="flex justify-end gap-4">{children}</div>;
}

export const Step = { Container, Label, Error, Footer };
