import React from 'react'

import Header from '@/src/components/Header'

import {ContextProvider} from '@/src/context'

import CourseLayout from './course'
import CoursesListLayout from './list'

export {CourseLayout, CoursesListLayout}

const ContextLayout = ({children}: {children: React.ReactNode}) => {
	return <ContextProvider>{children}</ContextProvider>
}

export default function Layout({children}: {children: React.ReactNode}) {
	return (
		<ContextLayout>
			<Header />
			<main>{children}</main>
		</ContextLayout>
	)
}
