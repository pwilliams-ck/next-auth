import { RegisterForm } from '@/components/auth/register-form';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { LucideConstruction } from 'lucide-react';

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center">
      <RegisterForm />
      <Alert className="my-12 w-42 bg-white/30 dark:bg-black/35 shadow-md">
        <LucideConstruction className="h-8 w-8" />
        <AlertTitle className="ml-4">Heads up!</AlertTitle>
        <AlertDescription className="ml-4">
          Auth is currently in beta and is actively being worked on.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default RegisterPage;
