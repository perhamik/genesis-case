import react from '@vitejs/plugin-react'
import {URL, fileURLToPath} from 'url'
import {defineConfig} from 'vitest/config'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./', import.meta.url)),
		},
	},
	test: {
		environment: 'jsdom',
		includeSource: ['src/**/*.{ts,tsx}'],
		exclude: ['__tests__/**/*.{ts,tsx}', '.next', 'node_modules', 'public'],
	},
})
