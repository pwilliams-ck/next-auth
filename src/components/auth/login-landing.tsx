import { CardWrapper } from '@/components/auth/card-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const LoginLanding = () => {
  return (
    <CardWrapper
      headerLabel="A simple authentication service"
      backButtonLabel="About Auth"
      backButtonHref="/"
    >
      <div className="flex justify-between my-4">
        <p>Register now, and request access to the beta. 🚀</p>
        <Link href="/auth/register">
          <Button className="mt-1 ml-auto" size="lg">
            Sign Up
          </Button>
        </Link>
      </div>
    </CardWrapper>
  );
};
