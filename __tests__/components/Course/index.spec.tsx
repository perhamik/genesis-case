import {render, screen} from '@testing-library/react'
import {beforeAll, describe, expect, it} from 'vitest'

import {CourseList} from '@/src/features/Course'

import {coursesList} from '@/__tests__/apiResponses'

describe('Home | Course List', () => {
	beforeAll(() => {
		render(<CourseList courses={coursesList.courses} />)
	})

	// it('Home renders', () => {
	// 	const section = screen.getByRole('section')

	// 	expect(section).toBeDefined()
	// })

	it('Has list', () => {
		const items = screen.getAllByRole('link')

		expect(items).toBeDefined()
	})

	// it('Single course has title', () => {
	// 	const title = screen.getByRole('heading', {level: 2})

	// 	expect(title).toBeDefined()
	// 	expect(title).toEqual(course.title)
	// })

	// it('Single course has lessons list', () => {
	// 	const list = screen.getByRole('list')
	// 	const lessons = getAllByRole(list, 'heading', {level: 3})

	// 	expect(list).toBeDefined()
	// 	expect(lessons.length).toEqual(course.lessons.length)
	// })
})
