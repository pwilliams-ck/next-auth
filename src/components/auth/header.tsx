import { Lock } from 'lucide-react'

type HeaderProps = {
  label: string
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex-col gap-y-4 items-center justify-center">
      <h1 className="flex text-3xl font-semibold">
        <Lock className="mr-2 h-8 w-8" />
        Auth
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  )
}

export default Header
