'use client'

import React from 'react'

import {useLocalStorage} from '@/src/shared/lib'

import type {Theme, ThemeType} from './config'
import {THEMES} from './config'

interface ThemeContextProps {
	themeType: ThemeType
	theme: Theme
	setCurrentTheme: React.Dispatch<React.SetStateAction<ThemeType>> | null
	toggleTheme: Function
	togglerRef?: React.MutableRefObject<HTMLInputElement | null>
}

export const ThemeContext = React.createContext<ThemeContextProps>({
	themeType: 'light',
	theme: THEMES['light'],
	setCurrentTheme: null,
	toggleTheme: () => {},
})

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
	const togglerRef = React.useRef<HTMLInputElement>(null)
	const [currentTheme, setCurrentTheme] = React.useState<ThemeType>('light')
	const [savedTheme, setSavedTheme] = useLocalStorage<ThemeType>({key: 'theme', value: currentTheme})

	const toggleTheme = () => {
		setCurrentTheme((prev) => {
			const nextTheme = prev === 'dark' ? 'light' : 'dark'
			setSavedTheme(nextTheme)
			return nextTheme
		})
	}

	if (togglerRef?.current) {
		togglerRef.current.checked = savedTheme === 'dark'
	}

	React.useLayoutEffect(() => {
		if (currentTheme !== savedTheme) {
			setCurrentTheme(savedTheme)
		}
	}, [savedTheme])

	React.useEffect(() => {
		if (currentTheme !== savedTheme) {
			setSavedTheme(currentTheme)
		}
	}, [currentTheme])

	return (
		<ThemeContext.Provider
			value={{
				themeType: currentTheme,
				theme: THEMES[currentTheme],
				setCurrentTheme,
				toggleTheme,
				togglerRef,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => React.useContext(ThemeContext)
