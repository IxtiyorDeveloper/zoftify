import {FC} from 'react'
import {Controller} from 'react-hook-form'
import ErrorLabel from '../text-input/ErrorLabel/ErrorLabel'
import styles from './select.module.scss'
import Select from 'react-select'

export interface IInputProps {
    placeholder?: string
    name: string
    htmlType?: string
    error?: string
    control: any
    required?: boolean
    label?: string
    disabled?: boolean
    defaultValue?: IOption[] | IOption
    options: IOption[] | IOption
}

export interface IOption {
    label: string
    value: "draft" | "published"
}

const CustomSelect: FC<IInputProps> = ({
                                           placeholder = '',
                                           name,
                                           htmlType = 'text',
                                           error = '',
                                           control,
                                           required = false,
                                           label = '',
                                           disabled,
                                           defaultValue,
                                           options,
                                           ...args
                                       }) => {
    return (
        <div className={styles.wrapper}>
            <Controller
                name={name}
                control={control}
                render={({field: {onChange, value}}) => {
                    return (
                        <Select
                            placeholder={placeholder}
                            isDisabled={disabled}
                            id={name}
                            defaultValue={defaultValue}
                            onChange={onChange}
                            value={value}
                            // @ts-ignore
                            options={options}
                            className={`${styles.select} ${!!error ? styles.required : ''}`}
                            {...args}
                        />
                    )
                }}
            />
            <ErrorLabel error={error}/>
        </div>
    )
}

export default CustomSelect
