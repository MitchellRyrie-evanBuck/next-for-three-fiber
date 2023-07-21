
import React, { FC, useEffect, useState } from 'react';
import MarkdownDocs from '@/docs/webpack/构建流程.md'
import MarkdownContent from '@/components/markdown/MarkdownContent';


type InProps = {

}

const Details: FC<InProps> = () => {
  return (
    <div className='w-1/2 m-auto p-10 bg-slate-300'>
    ----
      <MarkdownContent content={MarkdownDocs} />
    </div>
  )
}



export default Details