import { LoginButton } from '@/components/auth/login-button'
import { Button } from '@/components/ui/button'
import { Lock } from 'lucide-react'

export default function Home() {
  return (
    <main
      className="flex h-full flex-col items-center justify-center 
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-700 to-zinc-900"
    >
      <div className="space-y-6">
        <h1 className="flex text-6xl font-semibold text-white drop-shadow-md">
          <Lock className="mr-2 h-14 w-14" /> Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service.</p>
      </div>
      <div className="my-6">
        <LoginButton>
          <Button variant="secondary" size="lg">
            Login
          </Button>
        </LoginButton>
      </div>
    </main>
  )
}
