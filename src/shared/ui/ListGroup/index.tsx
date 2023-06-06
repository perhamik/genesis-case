import React from 'react'

import type {ComponentProps} from '../types'
import styles from './List.module.scss'
import {ListGroupItem} from './ListGroupItem'

const ListGroup = ({children}: ComponentProps) => {
	return <ul className={`list-group ${styles.list}`}>{children}</ul>
}

export default Object.assign(ListGroup, {Item: ListGroupItem})
