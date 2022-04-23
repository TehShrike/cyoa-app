import Wrapper from './Wrapper.svelte'

import { param_store, object_serializer_store } from './url_store.js'
import rot13 from './rot13.js'
import { to_obfuscated_json, from_obfuscated_json } from './state_serialization.mjs'

import all_cyoa_components from './globbed_adventure.js'

const basename = path => {
	const file = path.split(/[\/\\]/g).pop()
	return file.split(`.`).slice(0, -1).join(`.`)
}

const start_import = all_cyoa_components.find(({ path }) => path.endsWith(`Start.svelte`))
const container_import = all_cyoa_components.find(({ path }) => path.endsWith(`Container.svelte`))

if (!start_import) {
	console.error(`You need a "Start.svelte" file`)
} else if (!container_import) {
	console.error(`You need a "Container.svelte" file`)
} else {
	const name_to_id = Object.fromEntries(all_cyoa_components.map(({ path }) => {
		const name = basename(path)

		return [
			name,
			rot13(name),
		]
	}))

	const id_to_name = Object.fromEntries(all_cyoa_components.map(({ path }) => {
		const name = basename(path)

		return [
			rot13(name),
			name,
		]
	}))

	const id_to_component = Object.fromEntries(all_cyoa_components.map(({ path, export: { default: component } }) => {
		const name = basename(path)
		const id = name_to_id[name]

		return [
			id,
			component,
		]
	}))

	new Wrapper({
		target: document.body,
		props: {
			Container: container_import.export.default,
			name_to_id,
			id_to_name,
			id_to_component,
			page_id_param: param_store({ param_name: `page` }),
			adventure_state: object_serializer_store({
				param_name: `state`,
				replace: true,
				default_values: start_import.export.initial_state,
				serialize: to_obfuscated_json,
				deserialize: from_obfuscated_json,
			}),
		},
	})
}
