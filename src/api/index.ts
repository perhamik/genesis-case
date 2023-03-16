import {parseCookies, setCookie} from 'nookies'
import type {GetServerSidePropsContext} from 'next'
import type {CourseType, CourseSingleType} from '@/src/types'

export const API_PATH = `${process.env.API_URL}/${process.env.API_VERSION}`

export const getAuthToken = async (ctx: GetServerSidePropsContext) => {
	const auth = await fetch(`${API_PATH}/auth/anonymous?platform=subscriptions`)
	const res = (await auth.json()) as {token: string}
	setCookie(ctx, 'token', res.token, {
		path: '/',
	})
	return res.token
}

export const requestCoursesList = (token: string) => {
	return fetch(`${API_PATH}/core/preview-courses`, {
		method: 'GET',
		headers: {Authorization: `Bearer ${token}`},
	})
}

export const requestCourseInfo = (token: string, id: string) => {
	return fetch(`${API_PATH}/core/preview-courses/${id}`, {
		method: 'GET',
		headers: {Authorization: `Bearer ${token}`},
	})
}

const requestToken = (ctx: GetServerSidePropsContext) => {
	const cookies = parseCookies(ctx)
	return cookies && cookies.token ? cookies.token : getAuthToken(ctx)
}

export const getCoursesList = async (ctx: GetServerSidePropsContext) => {
	const token = await requestToken(ctx)
	const req = await requestCoursesList(token)
	const data = await req.json()
	return data as {courses: Array<CourseType>}
}

export const getCourseInfo = async (ctx: GetServerSidePropsContext) => {
	if (!ctx.params || !ctx.params.id) {
		return {
			notFound: true,
		}
	}
	const id = typeof ctx.params.id !== 'string' ? ctx.params.id[0] : ctx.params.id

	const token = await requestToken(ctx)
	const req = await requestCourseInfo(token, id)
	const data = await req.json()
	return data as CourseSingleType
}
