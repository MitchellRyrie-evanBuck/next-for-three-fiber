import React, { FC } from "react"
import Link from 'next/link';
const Main: FC = () => {
  return (<>
    <Link href="/main">
      <a>Go to Main Page</a>
    </Link>
  </>)
}



export default Main