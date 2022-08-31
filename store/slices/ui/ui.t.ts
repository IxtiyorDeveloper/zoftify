export interface IUIStore {
  data: {
    isLoading: boolean
    isError: boolean
    data: IData[]
  }
  pagination: number
  new: {
    isLoading: boolean
    isError: boolean
  }
  status: {
    isLoading: boolean
    isError: boolean
  }
}

export type IData = {
  id?: number
  text: string
  status: 'draft' | 'published'
  time: string
}
export type IStatus = {
  status: 'draft' | 'published'
  id: number
}
