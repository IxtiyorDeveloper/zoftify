import {FC} from "react"
import {Controller} from "react-hook-form"
import ErrorLabel from "./ErrorLabel/ErrorLabel"
import styles from "./text-input.module.scss";

export interface IInputProps {
    placeholder?: string
    name: string
    htmlType?: string
    error?: string
    control: any
    required?: boolean
    label?: string
    disabled?: boolean
}


const Input: FC<IInputProps> = ({
                                    placeholder = "",
                                    name,
                                    htmlType = "text",
                                    error = "",
                                    control,
                                    required = false,
                                    label = "",
                                    disabled,
                                    ...args
                                }) => {
    return (
        <div className={styles.wrapper}>
            <Controller
                name={name}
                control={control}
                render={({field: {onChange, value}}) => (
                    <input
                        disabled={disabled}
                        id={name}
                        onChange={onChange}
                        value={value}
                        type={htmlType}
                        placeholder={placeholder}
                        {...args}
                        className={`${styles.input} ${!!error ? styles.required : ""}`}
                    />
                )}
            />
            <ErrorLabel error={error}/>
        </div>
    )
}

export default Input
