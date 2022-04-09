import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'

const production = !process.env.ROLLUP_WATCH

const ignore_these_warnings = new Set([
	`a11y-label-has-associated-control`,
	`reactive-component`,
])

export default {
	input: `cyoa/index.js`,
	output: {
		sourcemap: true,
		format: `iife`,
		name: `app`,
		file: `public/build/bundle.js`,
	},
	plugins: [
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production,
			},
			onwarn(warning, handler) {
				if (ignore_these_warnings.has(warning.code)) {
					return
				}

				console.log(warning.code)
				console.log(warning)

				handler(warning)
			},
		}),
		resolve({
			browser: true,
			dedupe: [ `svelte` ],
		}),
	],
	watch: {
		clearScreen: false,
	},
}
