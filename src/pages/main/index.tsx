import React, { FC } from "react"
import Link from 'next/link';
import { Button } from "antd";



const Main: FC = () => {
  return (<>
    <Button type="primary"  >
      <Link href="/">
       Go to Main Page
      </Link>
    </Button>
  </>)
}



export default Main