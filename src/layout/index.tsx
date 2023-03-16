import React from 'react'
import {ContextProvider} from '@/src/context'
import Header from '@/src/components/Header'

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
