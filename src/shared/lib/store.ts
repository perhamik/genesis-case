import React from 'react'

export function useLocalStorage<T extends string>(options: {
	key: string | undefined
	value: T
}): [T, (value: T) => void] {
	const [value, setValue] = React.useState<T>(options.value)
	const key = React.useMemo(() => (options.key ? options.key : 'key'), [options])

	const ifLocalStorage = (): boolean => typeof window !== 'undefined' && !!window.localStorage

	const getFromStorage = (): T | null => {
		if (!ifLocalStorage()) return null

		return window.localStorage.getItem(key) as T
	}

	const setToStorage = (value: T): void => {
		if (!ifLocalStorage()) return

		return window.localStorage.setItem(key, value)
	}

	React.useLayoutEffect(() => {
		const saved = getFromStorage()
		if (saved) setValue(saved)
	}, [options])

	return [value, setToStorage]
}
