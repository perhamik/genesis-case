export const transformDuration = (seconds: number): string => {
	const duration = Math.abs(parseInt(`${seconds}`))
	const _h = Math.floor(duration / 3600)
	const _m = Math.floor((duration - _h * 3600) / 60)
	const _s = duration % 60
	const h = _h > 0 ? `${_h}` : ''
	const m = _m < 10 ? `0${_m}` : `${_m}`
	const s = _s < 10 ? `0${_s}` : `${_s}`
	return [h, m, s].filter((item) => !!item).join(':')
}

if (import.meta.vitest) {
	const {describe, it, expect} = import.meta.vitest

	describe('/shared/lib/timeTransform', () => {
		it('90 seconds to be 1:30', () => {
			expect(transformDuration(90)).toStrictEqual('01:30')
			expect(transformDuration(-90)).toStrictEqual('01:30')
			expect(transformDuration(90.3)).toStrictEqual('01:30')
			expect(transformDuration(90.6)).toStrictEqual('01:30')
		})

		it('59 seconds to be 0:59', () => {
			expect(transformDuration(59)).toStrictEqual('00:59')
			expect(transformDuration(-59)).toStrictEqual('00:59')
			expect(transformDuration(59.4)).toStrictEqual('00:59')
			expect(transformDuration(59.9)).toStrictEqual('00:59')
		})

		it('9 seconds to be 0:09', () => {
			expect(transformDuration(9)).toStrictEqual('00:09')
			expect(transformDuration(-9)).toStrictEqual('00:09')
			expect(transformDuration(9.3)).toStrictEqual('00:09')
			expect(transformDuration(9.6)).toStrictEqual('00:09')
		})

		it('5040 seconds to be 1:24:40', () => {
			expect(transformDuration(5040)).toStrictEqual('1:24:00')
			expect(transformDuration(-5040)).toStrictEqual('1:24:00')
			expect(transformDuration(5040.2)).toStrictEqual('1:24:00')
			expect(transformDuration(5040.7)).toStrictEqual('1:24:00')
		})

		it('24 * 3600 seconds to be 24:00:00', () => {
			expect(transformDuration(24 * 3600)).toStrictEqual('24:00:00')
			expect(transformDuration(-24 * 3600)).toStrictEqual('24:00:00')
		})

		it('0 seconds to be 00:00', () => {
			expect(transformDuration(0)).toStrictEqual('00:00')
		})
		it('10 seconds to be 00:10', () => {
			expect(transformDuration(10)).toStrictEqual('00:10')
		})
		it('99 seconds to be 01:39', () => {
			expect(transformDuration(99)).toStrictEqual('01:39')
		})
		it('100 seconds to be 01:40', () => {
			expect(transformDuration(100)).toStrictEqual('01:40')
		})
		it('999 seconds to be 16:39', () => {
			expect(transformDuration(999)).toStrictEqual('16:39')
		})
		it('1000 seconds to be 16:40', () => {
			expect(transformDuration(1000)).toStrictEqual('16:40')
		})
	})
}
