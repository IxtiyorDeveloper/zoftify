import type {NextPage} from 'next'
import styles from 'styles/Home.module.css'
import {Pagination} from "components/elements";

const Home: NextPage = () => {
    const a = 'some'
    return (
        <div className={styles.container}>
            <button
                className="prettier-class"
                id="prettier-id"
                // onClick={this.handleClick}
            >
                Click Here
            </button>
            <Pagination/>
        </div>
    )
}

export default Home
