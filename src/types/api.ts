type CourseMeta = {
	slug: string
	skills: Array<string>
	courseVideoPreview: {
		link: string
		duration: number
		previewImageLink: string
	}
}

export type CourseType = {
	id: string
	title: string
	tags: Array<string>
	launchDate: string
	status: string
	description: string
	duration: number
	lessonsCount: number
	containsLockedLessons: boolean
	previewImageLink: string
	rating: number
	meta: CourseMeta
}

export type LessonType = {
	id: string
	title: string
	duration: number
	order: number
	type: 'video' | string
	status: 'unlocked' | 'locked'
	link: string
	previewImageLink: string
	meta: null
	available?: boolean
}

export type CourseSingleType = {
	lessons: Array<LessonType>
	containsLockedLessons: boolean
} & CourseType
