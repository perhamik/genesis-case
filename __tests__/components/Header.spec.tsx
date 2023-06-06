import {render, screen} from '@testing-library/react'
import {beforeAll, describe, expect, it} from 'vitest'

import {Header} from '@/src/features/Header'

describe('Header', () => {
	beforeAll(() => {
		render(<Header />)
	})

	it('Header renders', () => {
		const header = screen.getByRole('banner')

		expect(header).toBeDefined()
	})

	it('Header has title', () => {
		const headerTitle = screen.getByRole('heading', {level: 1})

		expect(headerTitle).toBeDefined()
	})

	it('Header has logo image', () => {
		const logo = screen.getByRole('img')

		expect(logo).toBeDefined()
	})
})
