'use client'

import React from 'react'

import {ThemeProvider, useTheme} from '@/src/processes/theme'

const ThemeContainer = ({children}: {children: React.ReactNode}) => {
	const {theme, themeType} = useTheme()

	return (
		<body data-theme={themeType} style={{backgroundColor: theme['--theme-background-page']}}>
			<div className="wrapper" style={{...theme} as React.CSSProperties}>
				{children}
			</div>
		</body>
	)
}

export const Wrapper = ({children}: {children: React.ReactNode}) => {
	return (
		<ThemeProvider>
			<ThemeContainer>{children}</ThemeContainer>
		</ThemeProvider>
	)
}
