import type {ResponseCookie} from 'next/dist/compiled/@edge-runtime/cookies'
import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'

import {API, UUID} from '@/src/shared/api'

import {authResponse} from '@/__tests__/apiResponses'

export const getTokenFromNextRequest = (request: NextRequest): string =>
	request.cookies.get('token')?.value || ''

export const validateOldTokenOrGetNew = async (token: string): Promise<string> =>
	!token ? await API.authenticateGuestUser() : token

export const setTokenIntoResponseCookies = (token: string): ResponseCookie => {
	return {
		name: 'token',
		value: token,
		path: '/',
		secure: true,
		httpOnly: true,
		expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
	}
}

export const generateNextResponseWithCookies = (cookies: ResponseCookie): NextResponse => {
	const response = NextResponse.next()
	response.cookies.set(cookies)
	return response
}

if (import.meta.vitest) {
	const {describe, it, expect} = import.meta.vitest

	const token: UUID = authResponse.token

	describe('/processes/middleware', () => {
		it('setTokenIntoResponseCookies', () => {
			const cookies = setTokenIntoResponseCookies(token)

			expect(cookies.name).toStrictEqual('token')
			expect(cookies.value).toStrictEqual(token)
			expect(cookies.path).toStrictEqual('/')
			expect(cookies.secure).toStrictEqual(true)
			expect(cookies.httpOnly).toStrictEqual(true)
		})
	})
}
