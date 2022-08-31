import React, {Dispatch, FC, SetStateAction} from 'react'
import {Loader} from "components/elements"
import styles from './button.module.scss'

interface IButtonProps {
    title: string
    active: boolean
    isNum?: boolean
    n?: number
    onClick?: Dispatch<SetStateAction<string>>
    type?: 'button' | 'submit' | 'reset' | undefined
    loading?: boolean
    disabled: boolean
}

const Button: FC<IButtonProps> = ({
                                      title,
                                      active,
                                      isNum = false,
                                      n,
                                      onClick,
                                      type = 'button',
                                      loading,
                                      disabled
                                  }) => {
    console.log(disabled)
    return (
        <button
            className={`${styles.wrapper} 
            ${active ? styles.active : styles.inactive} 
            ${isNum ? styles.n : ''} ${disabled  ? styles.disabled : ""}`}
            onClick={() => onClick?.('')}
            type={type}
            disabled={disabled}
        >
            {title}
            {isNum && (
                <div
                    className={`${styles.num}
                     ${active ? styles.active : styles.inactive}`}>
                    {n}
                </div>
            )}
            {
                loading &&
                <Loader height={20} width={20} color="white"/>
            }
        </button>
    )
}

export default Button
