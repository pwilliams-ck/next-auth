import { FaExclamationTriangle } from 'react-icons/fa';
import { CardWrapper } from '@/components/auth/card-wrapper';

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Go back"
    >
      <div className="w-full flex justify-center items-center">
        <FaExclamationTriangle className="h-6 w-6 text-destructive" />
      </div>
    </CardWrapper>
  );
};
