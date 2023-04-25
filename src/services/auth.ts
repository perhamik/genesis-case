import type {GetServerSidePropsContext} from 'next/types'
import {parseCookies, setCookie} from 'nookies'

export const getAuthToken = async (ctx: GetServerSidePropsContext) => {
	const auth = await fetch(`${process.env.API_URL}/${process.env.API_VERSION}/auth/anonymous?platform=subscriptions`)
	const res = (await auth.json()) as {token: string}
	setCookie(ctx, 'token', res.token, {
		path: '/',
	})
	return res.token
}

export const requestToken = (ctx: GetServerSidePropsContext) => {
	const cookies = parseCookies(ctx)
	return cookies && cookies.token ? cookies.token : getAuthToken(ctx)
}
