import { Dispatch, FC, SetStateAction } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

interface IPagination {
  setPage: Dispatch<SetStateAction<number>>
  pagNum: number
  page: number
}

const Example: FC<IPagination> = ({ setPage, pagNum, page }) => {
  const arr = new Array(pagNum).fill('').map((_, i) => i + 1)

  const handlePrev = () => {
    if (page !== 1) {
      setPage(page - 1)
    }
  }
  const handleNext = () => {
    if (page !== pagNum) {
      setPage(page + 1)
    }
  }

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <div
          className="relative inline-flex cursor-pointer items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={() => handlePrev()}>
          Previous
        </div>
        <div
          className="relative ml-3 cursor-pointer inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={() => handleNext()}>
          Next
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex -space-x-px rounded-md"
            aria-label="Pagination">
            <div
              className="relative cursor-pointer inline-flex items-center rounded bg-gr px-2 py-2 mx-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
              onClick={() => handlePrev()}>
              <div className="sr-only">Previous</div>
              <ChevronLeftIcon className="h-5 w-5 color1" aria-hidden="true" />
            </div>
            {arr?.map((i, k) => {
              return (
                <div
                  key={k}
                  aria-current="page"
                  className={`relative z-10 inline-flex rounded cursor-pointer items-center ${
                    page === i ? 'bg-pr' : 'color1'
                  } px-4 py-2 text-sm font-medium text-white`}
                  onClick={() => setPage(i)}>
                  {i}
                </div>
              )
            })}
            <div
              className="relative inline-flex cursor-pointer items-center rounded bg-gr px-2 py-2 text-sm font-medium text-color-1 hover:bg-gray-50"
              onClick={() => handleNext()}>
              <div className="sr-only">Next</div>
              <ChevronRightIcon className="h-5 w-5 color1" aria-hidden="true" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
export default Example
