import { LoginForm } from '@/components/auth/login-form';

import { AlertPopup } from '@/components/alert-popup';
import { LucideConstruction } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center">
      <LoginForm />
      <AlertPopup
        title="Heads up!"
        description="Auth is currently in beta and is actively being worked on."
        icon={<LucideConstruction className="h-6 w-6" />}
      />
    </div>
  );
};

export default LoginPage;
