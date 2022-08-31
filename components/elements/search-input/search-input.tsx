import React, { Dispatch, FC, SetStateAction } from 'react'
import styles from './search-input.module.scss'
import SvgComponent from './svg'

interface ISearchInputProps {
  setSearch: Dispatch<SetStateAction<string>>
}

const SearchInput: FC<ISearchInputProps> = ({ setSearch }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flex}>
        <div className={styles.input}>
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div className={styles.icon}>
          <SvgComponent />
        </div>
      </div>
    </div>
  )
}

export default SearchInput
