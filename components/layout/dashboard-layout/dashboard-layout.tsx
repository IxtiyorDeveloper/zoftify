import React, { FC } from 'react'
import Sidebar from './sidebar/sidebar'
import Header from './header/header'
import styles from './dashboard-layout.module.scss'

export interface DashboardLayoutProps {
  children?: React.ReactNode
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.layout__main}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
