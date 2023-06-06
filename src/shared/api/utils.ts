import {env} from '../config'
import {fetcher} from '../lib'
import type {LessonType, UUID} from './types'

const getCourseIdIfSingle = (id: string): string => (id ? '/' + id : '')

const getApiCoursesPath = (id: string): string =>
	`${env.API_PATH}/${env.API_GET_COURSES}${getCourseIdIfSingle(id)}`

const getApiAuthPath = (): string => `${env.API_PATH}/${env.API_AUTH_PATH}`

const setApiRequestOptions = (token: UUID): RequestInit => {
	return {
		headers: new Headers({Authorization: `Bearer ${token}`, 'Cache-Control': 'Public, max-age=18000'}),
		cache: 'force-cache',
	}
}

const getCoursesRequest = (token: UUID, id: string = ''): Promise<Response> => {
	return fetcher(getApiCoursesPath(id), setApiRequestOptions(token))
}

const authenticationRequest = (): Promise<Response> => {
	return fetcher(getApiAuthPath())
}

async function transformResponseToJSON<T>(request: Promise<Response>) {
	try {
		const authRequest = await request
		return (await authRequest.json()) as T
	} catch (err) {
		console.warn(err)
		return {} as T
	}
}

const checkLessonsAccess = async (list: Array<LessonType>): Promise<Array<number>> => {
	const result: Array<number> = []
	if (!list) return result
	for await (let lesson of list) {
		try {
			const res = await fetcher(lesson.link)
			result.push(res.status)
		} catch (err) {
			console.warn(err)
		}
	}

	return result
}

export {getCoursesRequest, authenticationRequest, transformResponseToJSON, checkLessonsAccess}

if (import.meta.vitest) {
	const {describe, it, expect} = import.meta.vitest

	describe('/shared/api/utils', () => {
		it('getCourseIdIfSingle', () => {
			expect(getCourseIdIfSingle('')).toStrictEqual('')
			expect(getCourseIdIfSingle('some-id')).toStrictEqual('/some-id')
			expect(getCourseIdIfSingle('352be3c6-848b-4c19-9e7d-54fe68fef183')).toStrictEqual(
				'/352be3c6-848b-4c19-9e7d-54fe68fef183',
			)
		})

		it('getApiCoursesPath', () => {
			expect(env.API_PATH).toBeDefined()
			expect(env.API_GET_COURSES).toBeDefined()
			expect(getApiCoursesPath('')).toStrictEqual(`${env.API_PATH}/${env.API_GET_COURSES}`)
			expect(getApiCoursesPath('352be3c6-848b-4c19-9e7d-54fe68fef183')).toStrictEqual(
				`${env.API_PATH}/${env.API_GET_COURSES}/352be3c6-848b-4c19-9e7d-54fe68fef183`,
			)
		})

		it('getApiAuthPath', () => {
			expect(env.API_PATH).toBeDefined()
			expect(env.API_AUTH_PATH).toBeDefined()
			expect(getApiAuthPath()).toStrictEqual(`${env.API_PATH}/${env.API_AUTH_PATH}`)
		})

		it('setApiRequestOptions', () => {
			const {headers} = setApiRequestOptions('352be3c6-848b-4c19-9e7d-54fe68fef183')
			const authHeader = headers && (headers as Headers).get('Authorization')

			expect(headers).toBeDefined()
			expect(authHeader).toBeDefined()
			expect(authHeader).includes('352be3c6-848b-4c19-9e7d-54fe68fef183')
		})
	})
}
