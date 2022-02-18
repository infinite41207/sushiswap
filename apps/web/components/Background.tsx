import { FC } from 'react'

const Background: FC = ({ children }) => {
  return <div className="bg-white dark:bg-slate-900 dark:text-white w-full h-full">{children}</div>
}

export default Background
