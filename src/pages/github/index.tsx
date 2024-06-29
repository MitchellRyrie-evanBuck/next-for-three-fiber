

import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { Loader2 } from "lucide-react"

export default function GithubComponents() {
  return <div className="github">
    <Button>Button</Button>
    <Link href={''} className={buttonVariants({ variant: "outline" })}>Click </Link>
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
    <Button >
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Destructive</Button>
  </div>
}