export const transformDuration = (duration: number) => {
	const _h = Math.floor(duration / 3600)
	const _m = Math.floor((duration - _h * 3600) / 60)
	const _s = (duration % 60) + 1
	const h = _h > 0 ? `${_h}` : ''
	const m = _m > 10 ? `${_m}` : `0${_m}`
	const s = _s > 10 ? `${_s}` : `0${_s}`
	return [h, m, s].filter((item) => !!item).join(':')
}
