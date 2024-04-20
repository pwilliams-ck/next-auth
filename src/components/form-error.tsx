import { MdErrorOutline } from 'react-icons/md';

type FormErrorProps = {
  message?: string;
};

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-destructive/70 p-3 rounded-md flex items-center gap-x-2 text-sm">
      <MdErrorOutline className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
