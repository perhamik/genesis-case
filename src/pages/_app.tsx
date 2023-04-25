import type {AppProps} from 'next/app'
import React from 'react'

function CoursesApp({Component, pageProps}: AppProps) {
	return <Component {...pageProps} />
}

export default CoursesApp
