import React from 'react'
import {ContextProvider} from '@/src/context'
import Header from '@/src/components/header'

import CourseLayout from './course'
import CoursesListLayout from './list'

export {CourseLayout, CoursesListLayout}

const ContextLayout = ({children}: {children: any}) => {
	return <ContextProvider>{children}</ContextProvider>
}

export default function Layout({children}: {children: any}) {
	return (
		<ContextLayout>
			<Header />
			<main>{children}</main>
		</ContextLayout>
	)
}
