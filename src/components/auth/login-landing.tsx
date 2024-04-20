import { CardWrapper } from '@/components/auth/card-wrapper';
import { LoginButton } from '@/components/auth/login-button';
import { Button } from '../ui/button';

export const LoginLanding = () => {
  return (
    <CardWrapper
      headerLabel="A simple authentication service"
      backButtonLabel="About us"
      backButtonHref="/auth/register"
    >
      <div className="flex justify-between my-4">
        <p>Register now, and request access to the beta. 🚀</p>
        <LoginButton>
          <Button className="mt-1 ml-auto" size="lg">
            Sign Up
          </Button>
        </LoginButton>
      </div>
    </CardWrapper>
  );
};
