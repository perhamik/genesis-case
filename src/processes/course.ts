import {cookies} from 'next/headers'

import {API, checkLessonsAccess} from '@/src/shared/api'
import type {CourseSingleType, LessonType, UUID} from '@/src/shared/api'

import {singleCourse} from '@/__tests__/apiResponses'

const getTokenInHeadersCookies = (): string => cookies().get('token')?.value || ''

const updateLessonListAccordingToAccess = (
	list: Array<LessonType>,
	state: Array<number>,
): Array<LessonType> => {
	return list.map((lesson, id) => {
		lesson.available = state.at(id) === 200
		return lesson
	})
}

export const retrieveSingleCourse = async (id: UUID): Promise<CourseSingleType> => {
	const tokenCookie = getTokenInHeadersCookies()
	const data = await API.getSingleCourseWithToken(tokenCookie, id)

	const lessonsState = await checkLessonsAccess(data.lessons)
	return {
		...data,
		lessons: updateLessonListAccordingToAccess(data.lessons, lessonsState),
	}
}

if (import.meta.vitest) {
	const {describe, it, expect} = import.meta.vitest

	const lessons: Array<LessonType> = singleCourse.lessons
	const states = [200, 200, 401, 503, 500]
	const expectedResult = [true, true, false, false, false]

	describe('/processes/course', () => {
		it('updateLessonListAccordingToAccess', () => {
			const cases = updateLessonListAccordingToAccess(lessons, states).map(
				(lesson: LessonType, id: number) => {
					return {
						lesson,
						expected: expectedResult[id],
					}
				},
			)
			it.each(cases)('%#: updateLessonListAccordingToAccess', (caseItem) => {
				expect(caseItem.lesson.available).toStrictEqual(caseItem.expected)
			})
		})
	})
}
