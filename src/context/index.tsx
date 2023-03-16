import React from 'react'
import type {Dispatch, SetStateAction} from 'react'

type ContextType = {
	token: string
	setToken: Dispatch<SetStateAction<string>>
}

export const AppContext = React.createContext<ContextType>({} as ContextType)

export const ContextProvider = ({children}: {children: any}) => {
	const [token, setToken] = React.useState<string>('keklol')
	const contextData = React.useMemo(() => ({token, setToken}), [token, setToken])

	return <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
}
