import {data as backend_data} from "store/data"
import {IData} from "store/slices/ui/ui.t";

// YOU CAN SWITCH TO REJECT OR RESOLVE APIS HERE
const statuses = {
    isAddFailed: false,
    isGetFailed: false,
    isChangeStatus: false,
}

export const addPost = (data: IData[], post: IData): Promise<{ data: IData[], status: number, message: string }> => {
    return new Promise(((resolve, reject) => {

        setTimeout(() => {
            if (!statuses.isAddFailed) {
                if (!!data) {
                    resolve({
                        status: 204,
                        message: "Created",
                        data: [
                            ...data,
                            {
                                status: post?.status,
                                text: post?.text,
                                time: post?.time,
                                id: Math.floor(Math.random() * 100 + 1) + 1
                            }
                        ]
                    })
                }
            } else
                reject({
                    code: 500,
                    message: "Failed"
                })
        }, 3000)
    }))
}

export const getData = (data: IData[]): Promise<{ data: IData[], status: number, message: string }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!statuses.isGetFailed) {
                if (!!data?.length) {
                    console.log("data")
                    resolve({
                        status: 200,
                        message: "success",
                        data: data
                    })
                } else {
                    resolve({
                        status: 200,
                        message: "success",
                        data: backend_data
                    })
                }
            } else {
                reject({
                    status: 500,
                    message: "failed",
                })
            }
        }, 3000)
    })
}


export const changeStatus = (id: number, status: "draft" | "published", data: IData[]): Promise<{ data: IData[], status: number, message: string }> => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (!statuses.isChangeStatus) {
                if (data.find(i => i.id === id)?.status === status) {
                    reject({
                        status: 505,
                        message: "it is already in this status",
                    })
                } else {
                    resolve({
                        status: 204,
                        message: "Created",
                        data: [
                            ...data.map(
                                i => i.id !== id ? i
                                    :
                                    {
                                        status: status,
                                        text: i.text,
                                        time: i.time,
                                        id: i.id
                                    }
                            )
                        ]
                    })
                }
            } else {
                reject({
                    status: 500,
                    message: "failed",
                })
            }
        }, 3000)
    })
}
