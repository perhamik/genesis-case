import React from 'react'
import Head from 'next/head'
import Layout from '@/src/layout'
import {GetServerSideProps, GetServerSidePropsContext} from 'next'
import {getCourseInfo, checkLessonsAccess} from '@/src/api'

import type {CourseSingleType} from '@/src/types'
import CourseLayout from '@/src/layout/course'

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const {lessons, ..._data} = await getCourseInfo(ctx)
	const data = {..._data, lessons: lessons.sort((les1, les2) => les1.order - les2.order)}
	return {
		props: {data},
	}
}

export default function CoursePage({data}: {data: CourseSingleType}) {
	const [course, setCourse] = React.useState<CourseSingleType>(data)
	React.useEffect(() => {
		const availables = checkLessonsAccess(data.lessons)
		availables.then((status) => {
			const _lessons = course.lessons.map((lesson, id) => {
				lesson.available = status.at(id) === 200
				return lesson
			})

			setCourse({
				...course,
				lessons: _lessons,
			})
		})
	}, [])

	return (
		<Layout>
			<Head>
				<title>{data.title ? data.title : 'Course'}</title>
				<meta name="description" content={data.description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<CourseLayout data={course} />
		</Layout>
	)
}
