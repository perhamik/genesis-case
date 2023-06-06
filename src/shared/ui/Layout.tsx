import type {ComponentProps} from './types'
import {mergeWithAdditionalClassName} from './utils'

type ColProps = ComponentProps & {
	col?: IntRange<1, 13> | 'auto'
	'col-sm'?: IntRange<1, 13> | 'auto'
	'col-md'?: IntRange<1, 13> | 'auto'
	'col-lg'?: IntRange<1, 13> | 'auto'
}

export const Row = ({children, className, style}: ComponentProps) => {
	return (
		<div className={mergeWithAdditionalClassName('row', className)} style={style}>
			{children}
		</div>
	)
}

export const Col = ({children, className, style, ...props}: ColProps) => {
	const colsOptions = {
		col: props.col,
		'col-sm': props['col-sm'],
		'col-md': props['col-md'],
		'col-lg': props['col-lg'],
	}

	const cols = Object.entries(colsOptions)
		.filter(([_, value]) => !!value)
		.map(([key, value]) => `${key}-${value}`)
	return (
		<div className={mergeWithAdditionalClassName('col', [className, ...cols])} style={style}>
			{children}
		</div>
	)
}
