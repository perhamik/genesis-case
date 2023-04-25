import type {GetServerSideProps} from 'next'
import Head from 'next/head'
import React from 'react'

import Layout, {CoursesListLayout} from '@/src/layout'
import {getCoursesList} from '@/src/services'
import type {CourseType} from '@/src/types'

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
			<CoursesListLayout data={data} />
		</Layout>
	)
}
