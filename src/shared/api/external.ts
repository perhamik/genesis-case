import type {AuthResponseData, CourseSingleType, CoursesResponseData, UUID} from './types'
import {authenticationRequest, getCoursesRequest, transformResponseToJSON} from './utils'

export interface IAPI {
	authenticateGuestUser(): Promise<UUID>
	getCoursesWithToken(token: UUID): Promise<CoursesResponseData>
	getSingleCourseWithToken(token: UUID, id: string): Promise<CourseSingleType>
}

export class API implements IAPI {
	private static instance: API
	private constructor() {}

	public static getInstance(): API {
		if (!API.instance) {
			API.instance = new API()
		}

		return API.instance
	}

	public async authenticateGuestUser(): Promise<UUID> {
		const tokenData = await transformResponseToJSON<AuthResponseData>(authenticationRequest())
		return tokenData?.token || ''
	}

	public async getCoursesWithToken(token: UUID): Promise<CoursesResponseData> {
		const coursesList = await transformResponseToJSON<CoursesResponseData>(getCoursesRequest(token))
		!coursesList?.courses && Object.assign(coursesList, {courses: []})
		return coursesList
	}

	public async getSingleCourseWithToken(token: UUID, id: string): Promise<CourseSingleType> {
		return await transformResponseToJSON<CourseSingleType>(getCoursesRequest(token, id))
	}
}

export default API.getInstance()
