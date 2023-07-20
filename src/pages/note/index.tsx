import { FC, useEffect, useState } from "react";
import styles from './styles/note.module.scss'
import dayjs from 'dayjs'

interface NoteProps {
  id: number
  title: string
  content?: string
  createTime:  string
  updateTime:  string
  isDelete: boolean
}

const Note: FC = () => {
  const [noteData, setNoteData] = useState<NoteProps[]>([])
  useEffect(() => {
    // 随机生成笔记
    const noteDataList: NoteProps[] = []
    for (let i = 0; i < 30; i++) {
      const note: NoteProps = {
        id: i,
        title: `笔记${i}`,
        content: `笔记${i}的内容`,
        createTime: dayjs().format('YYYY-MM-MM HH:mm'),
        updateTime: dayjs().format('YYYY-MM-MM HH:mm'),
        isDelete: false
      }
      noteDataList.push(note)
    }
    setNoteData((prevData:any) => [...prevData, ...noteDataList]
    )
  },[])
  
  return (
    <div className={`${styles.main}`} >
      <div className={`${styles.header} h-60 bg-slate-300`} ></div>
      <div className={`${styles.container}`} >
        {
          noteData.map((item: NoteProps) => {
            return (
              <div className={`${styles.item}  flex h-10 `} key={item.id} >
                <div className={`${styles.title} ${styles.note} mr-3`} >{item.title}</div>
                <div className={`${styles.content} ${styles.note} mr-4`} >{item.content}</div>
                <div className={`${styles.time} ${styles.note} `} >{item.updateTime}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


export default Note