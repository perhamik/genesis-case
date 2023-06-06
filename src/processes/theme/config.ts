export type ThemeType = 'dark' | 'light'

enum Color {
	GREEN = '#198754', //--bs-success
	ORANGE = '#ffc107', //--bs-warning
	LIGHT_BLACK = '#333', //color light
	LIGHT_GREY = '#f9f9f9', //color dark
	WHITE = '#fff', //bg light
	DARK_PURPLE = '#4f145d', //bg dark
	DARK_BLUE = '#0b0b4c', //card bg dark
	DARK = '#212529', //header bg
}

export interface Theme {
	'--theme-primary': Color
	'--theme-secondary': Color
	'--theme-color': Color
	'--theme-color-header': Color
	'--theme-background': Color
	'--theme-background-page': Color
	'--theme-background-header': Color
}

export const THEMES: Record<ThemeType, Theme> = {
	light: {
		'--theme-primary': Color.GREEN,
		'--theme-secondary': Color.ORANGE,
		'--theme-color': Color.LIGHT_BLACK,
		'--theme-color-header': Color.WHITE,
		'--theme-background': Color.WHITE,
		'--theme-background-page': Color.WHITE,
		'--theme-background-header': Color.DARK,
	},
	dark: {
		'--theme-primary': Color.GREEN,
		'--theme-secondary': Color.ORANGE,
		'--theme-color': Color.LIGHT_GREY,
		'--theme-color-header': Color.WHITE,
		'--theme-background': Color.DARK_BLUE,
		'--theme-background-page': Color.DARK_PURPLE,
		'--theme-background-header': Color.DARK,
	},
}
