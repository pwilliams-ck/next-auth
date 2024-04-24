import { RegisterForm } from '@/components/auth/register-form';

import { AlertPopup } from '@/components/alert-popup';
import { LucideConstruction } from 'lucide-react';

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center">
      <RegisterForm />
      <AlertPopup
        title="Heads up!"
        description="Auth is currently in beta and is actively being worked on, come back soon!"
        icon={<LucideConstruction className="h-6 w-6" />}
      />
    </div>
  );
};

export default RegisterPage;
