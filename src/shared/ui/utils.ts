function clearArrayFromUndefines<T>(arr: Array<T | undefined>): Array<T> {
	return arr.filter((item) => !!item) as Array<T>
}

const mergeNumberArrayOrStringArray = (str: Array<number | string | undefined>): string => {
	return clearArrayFromUndefines(str)
		.map((item) => `${item}`)
		.join(' ')
}

export const mergeWithAdditionalClassName = (
	srcClass: string,
	additional: string | undefined | Array<number | string | undefined>,
): string => {
	if (!additional) return srcClass

	if (typeof additional === 'string') return `${srcClass} ${additional}`

	return `${srcClass} ${mergeNumberArrayOrStringArray(additional)}`
}

const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
	keyStr.charAt(e1 >> 2) +
	keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
	keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
	keyStr.charAt(e3 & 63)

export const rgbDataURL = (r: number, g: number, b: number) =>
	`data:image/gif;base64,R0lGODlhAQABAPAA${
		triplet(0, r, g) + triplet(b, 255, 255)
	}/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`
