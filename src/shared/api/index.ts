export type {
	CourseType,
	CourseSingleType,
	LessonType,
	SavedCourseInfoType,
	UUID,
	AuthResponseData,
	CoursesResponseData,
} from './types'

export {default as API} from './external'
export type {IAPI} from './external'
export {checkLessonsAccess} from './utils'
