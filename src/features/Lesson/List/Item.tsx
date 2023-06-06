import {ListGroup} from '@perhamik/react-components'
import React from 'react'

import type {LessonType} from '@/src/shared/api'
import {transformDuration} from '@/src/shared/lib'

import {CourseContext} from '../context'

export const LessonListItem = ({lesson}: {lesson: LessonType}) => {
	const {activeLesson, setActiveLesson} = React.useContext(CourseContext)

	return (
		<ListGroup.Item
			active={activeLesson?.id === lesson.id}
			onClick={() => setActiveLesson(() => lesson)}
			disabled={!lesson.available}
		>
			<h3
				className={`h6 ${!lesson.available ? 'text-muted' : ''}`}
			>{`${lesson.order}. ${lesson.title}`}</h3>
			<span>{transformDuration(lesson.duration)}</span>
		</ListGroup.Item>
	)
}
