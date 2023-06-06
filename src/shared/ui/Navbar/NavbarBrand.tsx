import Link from 'next/link'

import type {ComponentProps} from '../types'

type NavbarBrandProps = ComponentProps & {
	href: {pathname: string}
}

export const NavbarBrand = ({href, children}: NavbarBrandProps) => {
	return (
		<Link href={href} className="link navbar-brand text-white">
			{children}
		</Link>
	)
}
