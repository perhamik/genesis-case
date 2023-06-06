export type UUID = string

type CourseMeta = {
	slug: string
	skills?: Array<string>
	fullCourseProductId?: string
	fullCourseProductFamily?: string
	courseVideoPreview?: {
		link: string
		duration: number
		previewImageLink: string
	}
}

type CoreFields = {
	id: string
	title: string
	duration: number
	previewImageLink: string
}

export type CoursesOrSingleCommon = CoreFields & {
	tags: Array<string>
	launchDate: string
	status: string
	description: string
	containsLockedLessons: boolean
	previewImageLink: string
	rating: number
	meta: CourseMeta
}
export type CourseType = CoursesOrSingleCommon & {
	lessonsCount: number
}

export type LessonType = CoreFields & {
	order: number
	type: 'video' | string
	status: 'unlocked' | 'locked'
	link: string
	meta: null
	available?: boolean
}

export type CourseSingleType = CoursesOrSingleCommon & {
	lessons: Array<LessonType>
}

export type SavedCourseInfoType = {
	lesson: string
	offsetTime: string
}

export type AuthResponseData = {
	token: string
}

export type CoursesResponseData = {
	courses: Array<CourseType>
}
