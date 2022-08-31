import { FC } from 'react'
import styles from './error-label.module.scss'

export interface IErrorLabelProps {
  error: string
}

const ErrorLabel: FC<IErrorLabelProps> = ({ error }) => {
  if (!error) return null
  return (
    <div className={styles.wrapper}>
      <p>{error}</p>
    </div>
  )
}

export default ErrorLabel
