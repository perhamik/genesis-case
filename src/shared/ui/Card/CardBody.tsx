import React from 'react'

import type {ComponentProps} from '../types'
import {mergeWithAdditionalClassName} from '../utils'
import styles from './styles.module.scss'

export const CardBody = ({children, className, style}: ComponentProps) => {
	return (
		<div
			className={mergeWithAdditionalClassName(`card-body ${styles.card__body}`, className)}
			style={style}
		>
			{children}
		</div>
	)
}
