import type {GetServerSidePropsContext} from 'next/types'

import type {CourseSingleType, LessonType} from '@/src/types'

import {requestToken} from './auth'

export const requestCourseInfo = (token: string, id: string) => {
	return fetch(`${process.env.API_URL}/${process.env.API_VERSION}/core/preview-courses/${id}`, {
		headers: {Authorization: `Bearer ${token}`},
	})
}

export const getCourseInfo = async (ctx: GetServerSidePropsContext) => {
	if (!ctx.params || !ctx.params.id) {
		return {
			notFound: true,
			lessons: [],
		}
	}
	const id = typeof ctx.params.id !== 'string' ? ctx.params.id[0] : ctx.params.id

	const token = await requestToken(ctx)
	const req = await requestCourseInfo(token, id)
	const data = await req.json()
	return data as CourseSingleType
}

export const checkLessonsAccess = async (list: Array<LessonType>) => {
	const result: Array<number> = []
	for await (let lesson of list) {
		try {
			const res = await fetch(lesson.link)
			result.push(res.status)
		} catch (err) {
			console.warn(err)
		}
	}

	return result
}
