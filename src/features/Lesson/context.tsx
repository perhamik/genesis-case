import React from 'react'

import type {CourseSingleType, LessonType} from '@/src/shared/api'

type ContextType = {
	videoRef: React.MutableRefObject<HTMLVideoElement | null>
	activeLesson: LessonType | null
	setActiveLesson: React.Dispatch<React.SetStateAction<LessonType | null>>
	lessonsList: Array<LessonType> | null
	setLessonsList: React.Dispatch<React.SetStateAction<Array<LessonType> | null>>
	currentCourse: CourseSingleType | null
	setCurrentCourse: React.Dispatch<React.SetStateAction<CourseSingleType | null>>
	setActiveLessonById: Function
}

export const CourseContext = React.createContext<ContextType>({} as ContextType)

export const CourseContextProvider = ({children}: {children: React.ReactNode}) => {
	const videoRef = React.useRef<HTMLVideoElement | null>(null)

	const [lessonsList, setLessonsList] = React.useState<Array<LessonType> | null>(null)
	const [activeLesson, setActiveLesson] = React.useState<LessonType | null>(null)
	const [currentCourse, setCurrentCourse] = React.useState<CourseSingleType | null>(null)

	const setActiveLessonById = (id: string) => {
		if (!lessonsList || !id) return
		const search = lessonsList.find((lesson) => lesson.id === id)
		search && setActiveLesson(search)
	}

	const contextData = React.useMemo(
		() => ({
			videoRef,
			lessonsList,
			setLessonsList,
			activeLesson,
			setActiveLesson,
			currentCourse,
			setCurrentCourse,
			setActiveLessonById,
		}),
		[videoRef, lessonsList, setLessonsList, activeLesson, setActiveLesson, currentCourse, setCurrentCourse],
	)

	return <CourseContext.Provider value={contextData}>{children}</CourseContext.Provider>
}
