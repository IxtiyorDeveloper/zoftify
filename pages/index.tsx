import {useEffect, useState} from "react";
import type {NextPage} from 'next'
import styles from 'styles/home.module.scss'
import {Button, Pagination, Search, Table} from 'components/elements'
import {useSelector} from "react-redux"
import {getMainData, getPagination} from 'store'
import {useRouter} from 'next/router'

const Home: NextPage = () => {
    const [page, setPage] = useState<number>(1)
    const [pagNum, setPagNum] = useState<number>(1)
    const [filter, setFilter] = useState("")
    const [search, setSearch] = useState("")

    const router = useRouter()
    const pagination = useSelector(getPagination)
    const data = useSelector(getMainData)?.filter(i => i.text.toLowerCase().includes(search.toLowerCase()))

    const handleTab = (arg: string) => {
        setFilter(arg)
        setPage(1)
    }
    const handleNavigate = (href: string) => {
        router.push(href)
    }

    useEffect(() => {
        if (filter === "") {
            if (data) {
                if (data.length % pagination === 0) {
                    setPagNum(Math.floor(data.length / pagination))
                } else {
                    setPagNum(Math.floor(data.length / pagination) + 1)
                }
            }
        } else {
            const tempData = data.filter(i => i.status === filter)
            if (!!tempData) {
                if (tempData.length % pagination === 0) {
                    setPagNum(Math.floor(tempData.length / pagination))
                } else {
                    setPagNum(Math.floor(tempData.length / pagination) + 1)
                }
            }
        }
    }, [data, pagination, filter])

    return (
        <div className={styles.container}>
            <div className={styles.searchSection}>
                <Search setSearch={setSearch}/>
                <Button title="Create Post" active isNum={false} onClick={() => handleNavigate("/create-post")}/>
            </div>
            <div className={styles.buttons}>
                <Button title="All statuses" active={filter === ""} isNum n={data?.length}
                        onClick={() => handleTab("")}/>
                <Button title="Draft" active={filter === "draft"} isNum
                        n={data?.filter(i => i.status === "draft")?.length}
                        onClick={() => handleTab("draft")}
                />
                <Button title="Published" active={filter === "published"} isNum
                        n={data?.filter(i => i.status === "published")?.length}
                        onClick={() => handleTab("published")}/>
            </div>
            <div>
                <Table data={
                    filter !== "" ?
                        data.filter(i => i.status === filter) :
                        data
                }
                       page={page}
                       pageNum={pagNum}
                />
            </div>
            <Pagination setPage={setPage} pagNum={pagNum} page={page}/>
        </div>
    )
}

export default Home
