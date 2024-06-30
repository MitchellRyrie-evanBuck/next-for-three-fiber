

import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { Loader2 } from "lucide-react"
import { ActivityProps, generateDataForPastYear } from "@/lib/utils";
import { useEffect, useState } from "react";
import ActivityCalendarComponent from "@/components/useActivityCalendar";

export default function GithubComponents() {
  const [events, setEvent] = useState<ActivityProps[]>([])
  useEffect(() => {

    const data = generateDataForPastYear()

    setEvent(data as ActivityProps[])


  }, []);

  return <div className="github">
    <Button>Button</Button>
    <Link href={''} className={buttonVariants({ variant: "outline" })}>Click </Link>
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
    <Button >
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Destructive</Button>

    <div className='w-1/2 mt-10' >
      {/* <CodeBlock language='typescript' code={content} ></CodeBlock> */}
      {events && <ActivityCalendarComponent data={events} />}
    </div>
  </div>
}