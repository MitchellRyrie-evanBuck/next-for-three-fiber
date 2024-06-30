import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from 'axios';
import { Activity } from "react-activity-calendar";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




// 获取随机的励志文案函数
export async function fetchMotivationalQuote(): Promise<string> {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    return response.data.content;
  } catch (error) {
    console.error('Failed to fetch motivational quote:', error);
    return 'Keep going, the best is yet to come.'; // 默认返回一句话
  }
}

export type ActivityProps = Activity & { title: string} 
function randomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 生成从现在往前推一年的数据
export function generateDataForPastYear(): { title: string, date: string, count?: number, level?: number }[] {
  const currentDate = new Date();
  const pastYearDate = new Date(currentDate);
  pastYearDate.setFullYear(currentDate.getFullYear() - 1);

  const data: ActivityProps[] = [];

  while (pastYearDate <= currentDate) {
    const title = `事件${Math.floor(Math.random() * 3) + 1}`; // 随机生成事件标题
    const date = pastYearDate.toISOString().slice(0, 10) ?? 1 ; // 格式化日期为 'yyyy-mm-dd'
    let count = Math.floor(Math.random() * 30) + 1  ; // 生成 1 到 100 的随机整数
    let level = randomInteger(1, 4); // 生成 0 到 4 的随机整数作为 level
    level = level <= 1 ? 2 : level
    data.push({ title, date, count , level });

    pastYearDate.setDate(pastYearDate.getDate() + 1); // 日期向后推一天
  }

  return data;
}