import React from 'react'
import {CourseType} from '@/src/types'
import {AppContext} from '@/src/context/index'
import PaginationCourses from '@/src/components/PaginationCourse'
import CourseCard from '@/src/components/CourseCard'
import {Container, Row, Col} from 'react-bootstrap'

export default function CoursesListLayout({data}: {data: Array<CourseType>}) {
	const pageSize = 10
	const {currentPage} = React.useContext(AppContext)
	const currentList = React.useMemo(() => data.slice((currentPage - 1) * pageSize, currentPage * pageSize), [data, currentPage])
	return (
		<Container>
			<Row className="my-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
				{!!currentList &&
					currentList.length > 0 &&
					currentList.map((course) => (
						<Col key={course.id}>
							<CourseCard data={course} />
						</Col>
					))}
			</Row>
			<PaginationCourses totalCount={data.length} pageSize={pageSize} />
		</Container>
	)
}
