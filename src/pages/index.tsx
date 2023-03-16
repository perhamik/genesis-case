import React from 'react'
import {GetServerSideProps} from 'next'
import Head from 'next/head'
import Layout from '@/src/layout'
import {getCoursesList} from '@/src/api'

import {Container, Row, Col} from 'react-bootstrap'
import {CourseType} from '@/src/types'
import CourseCard from '@/src/components/CourseCard'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const req = await getCoursesList(ctx)
	const data = req.courses

	if (!data) {
		return {
			notFound: true,
		}
	}

	return {
		props: {data},
	}
}

export default function Home({data}: {data: Array<CourseType>}) {
	return (
		<Layout>
			<Head>
				<title>Courses</title>
				<meta name="description" content="List of online courses" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Container>
				<Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					{!!data &&
						data.length > 0 &&
						data.map((course) => (
							<Col key={course.id}>
								<CourseCard data={course} />
							</Col>
						))}
				</Row>
			</Container>
		</Layout>
	)
}
