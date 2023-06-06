import {CSSProperties} from 'react'

export type Colors = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'

export type ComponentProps = {
	children: React.ReactNode
	className?: string
	style?: CSSProperties
}
