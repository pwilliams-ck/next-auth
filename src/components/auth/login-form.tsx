'use client';

import z from 'zod';

import { LoginSchema } from '@/schemas';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { CardWrapper } from '@/components/auth/card-wrapper';

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="No account?"
      backButtonHref="/auth/register"
      showSocial
    ></CardWrapper>
  );
};
