export const delay = (ms: number = 500): Promise<boolean> =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(true)
		}, ms)
	})

export const delayedAction = (ms: number, func: Function): Promise<boolean> => {
	return new Promise((resolve) => {
		delay(ms).then(() => {
			func()
			resolve(true)
		})
	})
}

if (import.meta.vitest) {
	const {describe, it, expect, vi, beforeAll, afterAll} = import.meta.vitest

	describe('/shared/lib/delay', () => {
		const _delay = vi.fn(async (ms: number) => delay(ms))
		const cb = vi.fn()

		beforeAll(async () => {
			expect(_delay).not.toHaveBeenCalled()
			expect(cb).not.toHaveBeenCalled()
		})

		it.concurrent('returns true', async () => {
			expect(await _delay(350)).toStrictEqual(true)
		})

		it.concurrent('resolves after 350 ms', async () => {
			expect(await _delay(350)).toStrictEqual(true)
		})

		it.concurrent('have proper timout', async () => {
			expect(await delayedAction(350, cb)).toStrictEqual(true)
		})

		afterAll(async () => {
			expect(cb).toHaveBeenCalledTimes(1)
			expect(_delay).toHaveBeenCalledTimes(2)
		})
	})
}
