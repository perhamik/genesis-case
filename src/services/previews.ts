import type {LessonType} from '@/src/types'

export const getPreviewWebp = (path: string) => `${path}/cover.webp`

export const getPreviewSet = (path: string) => `${getPreviewWebp(path)}, ${path}/cover.png`

export const getLessonPreviewWebp = (lesson: LessonType) => `${lesson.previewImageLink}/lesson-${lesson.order}.webp`

export const getLessonPreviewSet = (lesson: LessonType) =>
	`${getLessonPreviewWebp(lesson)}, ${lesson.previewImageLink}/lesson-${lesson.order}.png`
