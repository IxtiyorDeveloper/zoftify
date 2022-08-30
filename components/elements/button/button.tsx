import React, {Dispatch, FC, SetStateAction} from 'react';
import styles from "./button.module.scss"

interface IButtonProps {
    title: string,
    active: boolean,
    isNum?: boolean,
    n?: number
    onClick?: Dispatch<SetStateAction<string>>
    type?: "button" | "submit" | "reset" | undefined
}

const Button: FC<IButtonProps> = ({
                                      title,
                                      active,
                                      isNum = false,
                                      n,
                                      onClick, type = "button"
                                  }) => {
    return (
        <button
            className={
                `${styles.wrapper} 
            ${active ? styles.active : styles.inactive} 
            ${isNum ? styles.n : ""}`}
            onClick={() => onClick?.("")}
            type={type}
        >
            {title}
            {
                isNum &&
                <div
                    className={`${styles.num}
                     ${active ? styles.active : styles.inactive}`}
                >
                    {n}
                </div>
            }
        </button>
    );
}

export default Button;
