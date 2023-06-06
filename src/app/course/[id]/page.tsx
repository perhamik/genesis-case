import {Metadata} from 'next'

import {retrieveSingleCourse} from '@/src/processes/course'

import {Single} from './Single'

export const metadata: Metadata = {
	title: 'Course',
}

export default async function CoursePage({params}: {params: {id: string}}) {
	const currentCourse = await retrieveSingleCourse(params.id)
	if (!currentCourse || !currentCourse?.title) {
		return null
	}

	currentCourse.title &&
		Object.assign(metadata, {title: currentCourse.title, description: currentCourse.description})

	return <Single course={currentCourse} />
}
