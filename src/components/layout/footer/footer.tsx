import { FC } from 'react'

const Header: FC = () => {
  return (
    <>
      <div className="text-black dark:text-white
        leading-[var(--foot-height)]
        min-h-[var(--foot-height)]
        text-center
      "  >
        copyright @@@
      </div>
    </>
  )
}

export default Header