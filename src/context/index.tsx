import type Hls from 'hls.js'
import React from 'react'

type ContextType = {
	hls: Hls | null
	setHls: React.Dispatch<React.SetStateAction<Hls | null>>
	currentPage: number
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export const AppContext = React.createContext<ContextType>({} as ContextType)

export const ContextProvider = ({children}: {children: React.ReactNode}) => {
	const [hls, setHls] = React.useState<null | Hls>(null)
	const [currentPage, setCurrentPage] = React.useState(1)
	const contextData = React.useMemo(
		() => ({hls, setHls, currentPage, setCurrentPage}),
		[hls, setHls, currentPage, setCurrentPage],
	)

	return <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
}
