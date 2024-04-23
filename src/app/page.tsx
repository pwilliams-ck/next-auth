import { LoginLanding } from '@/components/auth/login-landing';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PiFlyingSaucer } from 'react-icons/pi';

export default function Home() {
  return (
    <main className="h-full flex items-center justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#393939_1px,transparent_1px)] [background-size:16px_16px] sm:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
      <div className="flex flex-col items-center">
        <LoginLanding />
        <Alert className="my-12 w-42 bg-white/30 dark:bg-black/35 shadow-md">
          <PiFlyingSaucer className="h-8 w-8" />
          <AlertTitle className="ml-4">Heads up!</AlertTitle>
          <AlertDescription className="ml-4">
            Please excuse our dust, Auth is currently in beta and is actively
            being worked on.
          </AlertDescription>
        </Alert>
      </div>
    </main>
  );
}
