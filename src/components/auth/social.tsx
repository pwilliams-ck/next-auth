'use client';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { Button } from '@/components/ui/button';

export const Social = () => {
  const onClick = (provider: 'github' | 'google') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick('google')}
      >
        <FcGoogle />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick('github')}
      >
        <FaGithub />
      </Button>
    </div>
  );
};

export default Social;
