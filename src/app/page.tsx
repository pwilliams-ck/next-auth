import { LoginLanding } from '@/components/auth/login-landing';

export default function Home() {
  return (
    <main className="h-full flex items-center justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#393939_1px,transparent_1px)] [background-size:16px_16px] sm:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
      <LoginLanding />
    </main>
  );
}
