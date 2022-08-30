import {FC} from "react"
import {Controller} from "react-hook-form"
import ErrorLabel from "../text-input/ErrorLabel/ErrorLabel"
import styles from "./date-input.module.scss";
import DatePicker from "react-datepicker";
import moment from "moment";

export interface IInputProps {
    placeholder?: string
    name: string
    error?: string
    control: any
    required?: boolean
    label?: string
    disabled?: boolean
}


const DateInput: FC<IInputProps> = ({
                                        placeholder = "",
                                        name,
                                        error = "",
                                        control,
                                        required = false,
                                        label = "",
                                        disabled,
                                        ...args
                                    }) => {
    const dateFormat = "DD-MM-YYYY"

    return (
        <div className={styles.wrapper}>
            <Controller
                name={name}
                control={control}
                render={({field: {onChange, value}}) => {
                    return (
                        <DatePicker
                            id={name}
                            disabled={disabled}
                            onChange={onChange}
                            selected={value}
                            placeholderText={placeholder}
                            className={`${styles.dateInput} ${!!error ? styles.required : ""}`}
                            // dateFormat="dd MMMM yyyy, h:mm:ss a"
                            {...args}
                        />
                    )
                }}
            />
            <ErrorLabel error={error}/>
        </div>
    )
}

export default DateInput
