import React from 'react'
import type {AppProps} from 'next/app'

function CoursesApp({Component, pageProps}: AppProps) {
	return <Component {...pageProps} />
}

export default CoursesApp
