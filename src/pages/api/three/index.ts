// pages/api/cases.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  let casesDirectory: any
  let cases: any
  try {
    casesDirectory = path.join(process.cwd(), '/src/pages/threefiber/three'); // 本地目录的路径，这里假设是 public/three
    cases = fs.readdirSync(casesDirectory); // 读取目录下的文件和子目录
  } catch (error) {
    console.log('error---->',error);
  }
  console.log('casesDirectory---->',casesDirectory);
  console.log('cases----->',cases);
  // 处理案例数据，您可能需要根据实际情况调整这里的处理逻辑
  const casesData = cases.map((caseId:any) => {
    const caseDirectory = path.join(casesDirectory, caseId);
    const caseTitle = caseId;
    const caseImageUrl = 'https://source.unsplash.com/random/300x200'; // 这里使用随机图片作为案例的图片，您可以根据实际情况修改

    return {
      id: caseId,
      caseDirectory: caseDirectory,
      title: caseTitle,
      imageUrl: caseImageUrl,
    };
  });

  res.status(200).json(casesData);
}