import React from 'react'
import {useInterval} from 'usehooks-ts'

import {CourseContext} from '@/src/features/Lesson/context'
import {env} from '@/src/shared/config'
import {delayedAction} from '@/src/shared/lib'
import {useLocalStorage} from '@/src/shared/lib'

import {attachHlsVideo} from './utils'

type SaveFormat = {
	lesson: string
	time: number
}

export const LessonVideo = () => {
	const {videoRef, activeLesson, lessonsList, currentCourse, setActiveLessonById} =
		React.useContext(CourseContext)

	const [currentCourseLesson, setCurrentCourseLesson] = useLocalStorage<string>({
		key: currentCourse?.id,
		value: '',
	})

	const updateVideoWithActiveLesson = (time: number) => {
		if (!activeLesson) return

		delayedAction(950, () => attachHlsVideo(activeLesson, time, videoRef))
	}

	const updateVideoWithSavedIdLesson = (data: SaveFormat) => {
		console.log(data)
		setActiveLessonById(data.lesson)
		updateVideoWithActiveLesson(data.time)
	}

	React.useLayoutEffect(() => {
		if (!activeLesson) return
		const {time} = currentCourseLesson ? JSON.parse(currentCourseLesson) : env.PLAYER_START_POSITION
		updateVideoWithActiveLesson(time)
	}, [activeLesson])

	React.useLayoutEffect(() => {
		if (!currentCourseLesson) return
		const data: SaveFormat = JSON.parse(currentCourseLesson)

		updateVideoWithSavedIdLesson(data)
	}, [currentCourse, lessonsList])

	useInterval(() => {
		const saveCurrentProgress = () => {
			const id = activeLesson?.id || ''
			const videoElement = videoRef?.current
			if (!videoElement || !id) return

			const data: SaveFormat = {
				lesson: id,
				time: videoElement.currentTime ? Math.floor(videoElement.currentTime) : 0,
			}

			if (data.time > 5) {
				setCurrentCourseLesson(JSON.stringify(data))
			}
		}

		saveCurrentProgress()
	}, 5000)

	return <video ref={videoRef} controls className="d-flex w-100 h-100" />
}
