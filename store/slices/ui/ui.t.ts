export interface IUIStore {
    data: IData[]
    pagination:number
}

export type IData = {
    id: number,
    text: string,
    time: string,
    status: "draft" | "published"
}
