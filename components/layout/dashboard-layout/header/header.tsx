import {FC} from 'react'
import styles from './header.module.scss'
import Image from 'next/image'
import {useRouter} from "next/router";

interface HeaderProps {
}


const Header: FC<HeaderProps> = () => {
    const {pathname} = useRouter();

    const router = useRouter()

    const handleNavigate = (href: string) => {
        router.push(href)
    }
    return (
        <div className={styles.header}>
            <div className={styles.img}>
                <Image src="/logo.png" width="78px" height="17.65px" alt="img"/>
            </div>
            <div className={styles.text}>
                {
                    pathname === "/create-post" ?
                        <>
                            <Image src='/Button.png' width="28px" height="28px" alt="img"
                                   onClick={() => handleNavigate("/")}/>
                            <div>
                                New Post
                            </div>
                        </>
                        :
                        <div>Posts</div>
                }
            </div>
        </div>
    )
}

export default Header
