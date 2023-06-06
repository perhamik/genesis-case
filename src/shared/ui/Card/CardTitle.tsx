import React from 'react'

import type {ComponentProps} from '../types'
import styles from './styles.module.scss'

export const CardTitle = ({children}: ComponentProps) => {
	return <h5 className={`card-title ${styles.card__title}`}>{children}</h5>
}
