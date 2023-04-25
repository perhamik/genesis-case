import React from 'react'
import {Pagination} from 'react-bootstrap'

import {AppContext} from '@/src/context/index'

const preparePaginationArray = (size: number) => Array.from(Array(size).keys())

const PaginationCourses = ({totalCount, pageSize}: {totalCount: number; pageSize: number}) => {
	const {currentPage, setCurrentPage} = React.useContext(AppContext)
	const pagesLength = Math.ceil(totalCount / pageSize)

	const onPageNumberClick = (page: number) => {
		setCurrentPage(() => (page > pagesLength ? pagesLength : page))
	}

	return (
		<Pagination className="justify-content-center">
			<Pagination.Prev disabled={currentPage <= 1} onClick={() => setCurrentPage((prev) => prev - 1)} />
			{preparePaginationArray(pagesLength).map((i) => {
				return (
					<Pagination.Item
						key={`pagination_item_${i}`}
						active={i + 1 === currentPage}
						onClick={() => onPageNumberClick(i + 1)}
					>
						{i + 1}
					</Pagination.Item>
				)
			})}

			<Pagination.Next disabled={currentPage >= pagesLength} onClick={() => setCurrentPage((prev) => prev + 1)} />
		</Pagination>
	)
}

export default PaginationCourses
