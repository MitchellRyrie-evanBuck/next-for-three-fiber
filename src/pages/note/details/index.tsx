
import React, { FC, useEffect, useState } from 'react';
import MarkdownDocs from '@/docs/webpack/构建流程.md'
import MarkdownContent from '@/components/markdown/MarkdownContent';


type InProps = {

}

const Details: FC<InProps> = () => {
  return (
    <>
    ----
      <MarkdownContent content={MarkdownDocs} />
    </>
  )
}



export default Details