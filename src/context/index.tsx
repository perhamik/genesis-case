import React from 'react'
import type {Dispatch, SetStateAction} from 'react'
import Hls from 'hls.js'

type ContextType = {
	hls: Hls | null
	setHls: Dispatch<SetStateAction<Hls | null>>
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
}

export const AppContext = React.createContext<ContextType>({} as ContextType)

export const ContextProvider = ({children}: {children: any}) => {
	const [hls, setHls] = React.useState<null | Hls>(null)
	const [currentPage, setCurrentPage] = React.useState(1)
	const contextData = React.useMemo(
		() => ({hls, setHls, currentPage, setCurrentPage}),
		[hls, setHls, currentPage, setCurrentPage],
	)

	return <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
}
