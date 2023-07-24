// pages/api/cases.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  
  let casesDirectory: any
  let cases: any
  let IMGDirectory :any
  let IMGSFILE : any
  try {
    casesDirectory = path.join(process.cwd(), '/src/pages/threefiber/three'); 
    IMGDirectory = path.join(process.cwd(), '/public/threefiber/three'); 
    cases = fs.readdirSync(casesDirectory); 
    IMGSFILE = fs.readdirSync(IMGDirectory);
  } catch (error) {
    console.log('error---->',error);
  }

  // 处理案例数据，您可能需要根据实际情况调整这里的处理逻辑
  const casesData = cases.map((caseId:any, index:number) => {
    const caseDirectory = path.join(casesDirectory, caseId);
    const srcDirectory = path.join(IMGDirectory, caseId );
    const images = fs.readdirSync(srcDirectory);
    const filteredArray = images.filter(item => !item.startsWith('.') )
    const coverImage = filteredArray[0];
    return {
      id: caseId,
      // caseDirectory: caseDirectory,
      title: caseId,
      imageUrl: coverImage,
    };
  });

  res.status(200).json(casesData);
}