import styles from './sidebar.module.scss'
import { FC } from 'react'
import { NavLink } from './nav-link'
import Image from 'next/image'

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const routes = [
    {
      title: 'Posts',
      route: '/',
      img: '/color-swatch.png',
    },
  ]
  return (
    <div className={styles.sidebar}>
      {routes?.map(({ img, route, title }, k) => {
        return (
          <NavLink href={route} key={k} activeClassName={styles.active}>
            <div className={styles.menu}>
              <div>
                <Image src={img} alt="img" width={24} height={24} />
              </div>
              <p>{title}</p>
            </div>
          </NavLink>
        )
      })}
    </div>
  )
}

export default Sidebar
