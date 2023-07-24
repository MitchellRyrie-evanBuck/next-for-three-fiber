import { FC } from "react"
import styles from './styles/filter.module.scss'

const CSS:FC = () => {
  return (
    <div className={`${styles.container}`} >
      <div className={ `${styles.boxParent}` } >
        <div className={styles.box}>
        </div>
        <div className={styles.box2}>
        </div>
      </div>
    </div>
  )
}

export default CSS