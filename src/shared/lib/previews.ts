import type {LessonType} from '@/src/shared/api'

import {singleCourse} from '@/__tests__/apiResponses'

export const getPreviewWebp = (path: string): string => `${path}/cover.webp`
export const getPreviewPNG = (path: string): string => `${path}/cover.png`

export const getPreviewSet = (path: string): string => `${getPreviewWebp(path)}, ${path}/cover.png`

export const getLessonPreviewWebp = (lesson: LessonType): string =>
	`${lesson.previewImageLink}/lesson-${lesson.order}.webp`

export const getLessonPreviewPNG = (lesson: LessonType): string =>
	`${lesson.previewImageLink}/lesson-${lesson.order}.png`

export const getLessonPreviewSet = (lesson: LessonType): string =>
	`${getLessonPreviewWebp(lesson)}, ${lesson.previewImageLink}/lesson-${lesson.order}.png`

if (import.meta.vitest) {
	const {describe, it, expect} = import.meta.vitest
	const path = 'http://localhost:3000/images'

	const lesson: LessonType = singleCourse.lessons[0]

	describe('/shared/lib/previews', () => {
		it('getPreviewWebp', () => {
			const webp = getPreviewWebp(path)

			expect(webp).toStrictEqual(`${path}/cover.webp`)
		})

		it('getLessonPreviewWebp', () => {
			const webpLesson = getLessonPreviewWebp(lesson)

			expect(webpLesson).toStrictEqual(`${lesson.previewImageLink}/lesson-${lesson.order}.webp`)
		})

		it('getPreviewSet', () => {
			const previewSet = getPreviewSet(path)

			expect(previewSet).toStrictEqual(`${path}/cover.webp, ${path}/cover.png`)
		})

		it('getLessonPreviewSet', () => {
			const previewSetLesson = getLessonPreviewSet(lesson)

			expect(previewSetLesson).toStrictEqual(
				`${lesson.previewImageLink}/lesson-${lesson.order}.webp, ${lesson.previewImageLink}/lesson-${lesson.order}.png`,
			)
		})
	})
}
