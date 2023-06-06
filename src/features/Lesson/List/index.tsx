import {ListGroup} from '@perhamik/react-components'
import React from 'react'

import {CourseContext} from '../context'
import {LessonListItem} from './Item'

export const LessonsList = () => {
	const {lessonsList, setLessonsList, currentCourse} = React.useContext(CourseContext)

	React.useEffect(() => {
		if (!currentCourse || !currentCourse.lessons) return
		setLessonsList(() => currentCourse.lessons)
	}, [currentCourse])

	return (
		<ListGroup>
			{lessonsList && lessonsList.map((lesson) => <LessonListItem key={lesson.id} lesson={lesson} />)}
		</ListGroup>
	)
}
