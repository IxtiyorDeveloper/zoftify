import React, {FC, useState} from 'react'
import {IData, IStatus} from 'store/slices/ui/ui.t'
import styles from './table.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {changePostStatus, getCallStatus, getPagination} from 'store'
import moment from "moment";
import {BsChevronDown, BsChevronUp} from "react-icons/bs"
import {Loader} from "components/elements"

interface ITableProps {
    data: IData[]
    page: number
    pageNum: number
}

const Table: FC<ITableProps> = ({data, page, pageNum}) => {
    const pagination = useSelector(getPagination)
    const dispatch = useDispatch()
    const [id, setId] = useState(-1)

    const [bool, setBool] = useState(-1)

    const handleChange = (data: IStatus) => {
        dispatch(changePostStatus(data))
        setId(data?.id)
    }

    const loading = useSelector(getCallStatus('data'))
    const loadingStatus = useSelector(getCallStatus('status'))


    return (
        <div className={`${styles.wrapper} ${loading?.isLoading ? "w100" : ""}`}>
            {
                loading?.isLoading ?
                    <Loader width={50} height={50} color="#177EFF" type="special"/>
                    :
                    data?.slice(pagination * (page - 1), pagination * page).map((i, k) => {
                        return (
                            <div key={k} className={styles.row}>
                                <div className={styles.col}>{i.id}</div>
                                <div className={styles.col}>{i.text}</div>
                                <div className={styles.col}>{moment(i.time).fromNow()}</div>
                                <div className={styles.col}
                                     onMouseEnter={() => setBool(k)}
                                     onMouseLeave={() => setBool(-1)}
                                >
                                    {i.status}
                                    {
                                        bool === k ?
                                            <BsChevronUp/>
                                            :
                                            <BsChevronDown/>
                                    }
                                    <div>
                                        {
                                            (loadingStatus.isLoading && id === i.id) &&
                                            <Loader height={20} width={20} color="#177EFF"/>
                                        }
                                    </div>
                                    {
                                        bool === k &&
                                        <div className={`${styles.abs}`}>
                                            <div className={`${styles.option}`}
                                                 onClick={() => handleChange({
                                                     id: i.id!,
                                                     status: "published"
                                                 })}
                                            >
                                                Published
                                            </div>
                                            <div
                                                className={`${styles.option}`}
                                                onClick={() => handleChange({
                                                    id: i.id!,
                                                    status: "draft"
                                                })}
                                            >
                                                Draft
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default Table
