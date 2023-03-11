import ReactPaginate from 'react-paginate'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { PaginationWrap } from './Pagination.styled'
export type TPagination = {
  forcePage?: number
  pageCount?: number
  onPageChange?: (selectedItem: { selected: number }) => void
}
export const Pagination = ({
  forcePage,
  pageCount = 1,
  onPageChange,
}: TPagination) => {
  return (
    <PaginationWrap>
      <ReactPaginate
        previousLabel={<IoIosArrowBack />}
        nextLabel={<IoIosArrowForward />}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
        forcePage={forcePage}
      />
    </PaginationWrap>
  )
}
