import '@perhamik/react-components/dist/index.css'
import * as dotenv from 'dotenv'
import React from 'react'

import {Header} from '@/src/features/Header'
import '@/src/shared/global.scss'

import {Wrapper} from './Wrapper'

const result = dotenv.config()

if (result.error) {
	throw result.error
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<Wrapper>
				<Header />
				<main>{children}</main>
			</Wrapper>
		</html>
	)
}
