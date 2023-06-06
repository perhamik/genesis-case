import type {Colors, ComponentProps} from './types'
import {mergeWithAdditionalClassName} from './utils'

type BadgeProps = ComponentProps & {
	bg?: Colors
}

const backgroundPick = (bg: BadgeProps['bg'], srcClassName: string): string => {
	if (!bg) return srcClassName

	return `${srcClassName} text-bg-${bg}`
}

export const Badge = ({children, className, bg}: BadgeProps) => {
	const withAdditionalClass = mergeWithAdditionalClassName('badge', className)
	return <span className={backgroundPick(bg, withAdditionalClass)}>{children}</span>
}
