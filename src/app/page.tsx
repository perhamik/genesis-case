import {Metadata} from 'next'

import {CourseList} from '@/src/features/Course'
import {retrieveCoursesList} from '@/src/processes/home'

export const metadata: Metadata = {
	title: 'Courses',
	description: 'List of online courses',
}

export default async function Home() {
	const courses = await retrieveCoursesList()
	if (!courses) return null

	return <CourseList courses={courses} />
}
