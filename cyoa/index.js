const to_hexadecimal = str => {
	let result = ``

	for (let i = 0; i < str.length; i++) {
		const hex = str.charCodeAt(i).toString(16)
		result += (`000` + hex).slice(-4)
	}

	return result
}

import Wrapper from './Wrapper.svelte'

import all_cyoa_components from './globbed_adventure.js'

const basename = path => {
	const file = path.split(/[\/\\]/g).pop()
	return file.split(`.`).slice(0, -1).join(`.`)
}

if (!all_cyoa_components.some(({ path }) => path.endsWith(`Start.svelte`))) {
	console.error(`You need a "Start.svelte" file`)
} else {
	const name_to_id = Object.fromEntries(all_cyoa_components.map(({ path }) => {
		const name = basename(path)

		return [
			name,
			to_hexadecimal(name),
		]
	}))

	const id_to_name = Object.fromEntries(all_cyoa_components.map(({ path }) => {
		const name = basename(path)

		return [
			to_hexadecimal(name),
			name,
		]
	}))

	const id_to_component = Object.fromEntries(all_cyoa_components.map(({ path, export: component }) => {
		const name = basename(path)
		const id = name_to_id[name]

		return [
			id,
			component,
		]
	}))

	const get_params_string_from_browser = () => location.hash.replace(/^#/, ``)
	const params = {
		get: key => new URLSearchParams(get_params_string_from_browser()).get(key),
		set: (key, value) => {
			const params = new URLSearchParams(get_params_string_from_browser())
			params.set(key, value)
			location.hash = params.toString()
		},
	}

	const app = new Wrapper({
		target: document.body,
		props: {
			name_to_id,
			id_to_name,
			id_to_component,
			params,
		},
	})
}
