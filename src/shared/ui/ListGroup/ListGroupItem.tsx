import type {ComponentProps} from '../types'
import {mergeWithAdditionalClassName} from '../utils'

type ListGroupItemProps = ComponentProps & {
	active?: boolean
	onClick?: Function
	disabled?: boolean
}

const staticClassNames = [
	'd-flex',
	'justify-content-between',
	'align-items-start',
	'list-group-item',
	'list-group-item-action',
]

export const ListGroupItem = ({active, disabled, onClick, children}: ListGroupItemProps) => {
	const stateClassName = !!disabled ? 'disabled' : !!active ? 'active' : ''

	const handleClick = (e: React.MouseEvent) => {
		onClick && onClick(e)
	}

	return (
		<button
			type="button"
			className={mergeWithAdditionalClassName(stateClassName, [...staticClassNames])}
			onClick={handleClick}
		>
			{children}
		</button>
	)
}
