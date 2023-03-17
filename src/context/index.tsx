import React from 'react'
import type {Dispatch, SetStateAction} from 'react'
import Hls from 'hls.js'

type ContextType = {
	hls: Hls | null
	setHls: Dispatch<SetStateAction<Hls | null>>
}

export const AppContext = React.createContext<ContextType>({} as ContextType)

export const ContextProvider = ({children}: {children: any}) => {
	const [hls, setHls] = React.useState<null | Hls>(null)
	const contextData = React.useMemo(() => ({hls, setHls}), [hls, setHls])

	return <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
}
