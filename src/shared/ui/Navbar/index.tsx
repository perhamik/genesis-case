import React from 'react'

import type {ComponentProps} from '../types'
import {mergeWithAdditionalClassName} from '../utils'
import {NavbarBrand} from './NavbarBrand'

const baseClassName = 'navbar header__navbar'
const additionalClassNames: Array<string> = []

const Navbar = ({children, className}: ComponentProps) => {
	if (className) {
		additionalClassNames.push(className)
	}

	return (
		<nav className={mergeWithAdditionalClassName(baseClassName, additionalClassNames)}>
			<div className="container-fluid">{children}</div>
		</nav>
	)
}

export default Object.assign(Navbar, {Brand: NavbarBrand})
