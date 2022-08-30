import {FC} from "react"
import {IData} from "store/slices/ui/ui.t";
import styles from "./table.module.scss"
import {useSelector} from "react-redux";
import {getPagination} from "store";

interface ITableProps {
    data: IData[],
    page: number
    pageNum: number
}

const Table: FC<ITableProps> = ({data, page, pageNum}) => {

    const pagination = useSelector(getPagination)

    return (
        <div className={styles.wrapper}>
            {
                data?.slice(pagination * (page - 1), pagination * page).map((i, k) => {
                    return (
                        <div key={k} className={styles.row}>
                            <div className={styles.col}>
                                {i.id}
                            </div>
                            <div className={styles.col}>
                                {i.text}
                            </div>
                            <div className={styles.col}>
                                {i.time}
                            </div>
                            <div className={styles.col}>
                                {i.status}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Table
