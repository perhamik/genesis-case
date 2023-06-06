import {cookies} from 'next/headers'

import {API} from '@/src/shared/api'
import type {CourseType} from '@/src/shared/api'
import {Store} from '@/src/shared/store'

const getTokenInHeadersCookies = (): string => cookies().get('token')?.value || ''

export const retrieveCoursesList = async (): Promise<Array<CourseType>> => {
	const tokenCookie = getTokenInHeadersCookies()
	const saved = Store.getCourses()

	if (!saved.courses?.length) {
		const data = await API.getCoursesWithToken(tokenCookie)

		if (data?.courses?.length > 0) {
			Store.init(data.courses)
			return data.courses
		}
	}

	return saved.courses as Array<CourseType>
}
