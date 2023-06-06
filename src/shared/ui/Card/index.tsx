import React from 'react'

import type {ComponentProps} from '../types'
import {mergeWithAdditionalClassName} from '../utils'
import {CardBody} from './CardBody'
import {CardImg} from './CardImg'
import {CardText} from './CardText'
import {CardTitle} from './CardTitle'
import styles from './styles.module.scss'

const Card = ({children, className}: ComponentProps) => {
	return <div className={mergeWithAdditionalClassName('card', [className, styles.card])}>{children}</div>
}

export default Object.assign(Card, {Body: CardBody, Title: CardTitle, Text: CardText, Img: CardImg})
