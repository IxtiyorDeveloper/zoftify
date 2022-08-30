import {FC} from "react";
import styles from "./header.module.scss"
import Image from "next/image";

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {
    return (
        <div className={styles.header}>
            <div className={styles.img}>
                <Image src='/logo.png' width="78px" height="17.65px" alt="img"/>
            </div>
            <div className={styles.text}>
                <div>Posts</div>
            </div>
        </div>
    );
}

export default Header;
