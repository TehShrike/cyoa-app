

const get_params_string_from_browser = () => location.hash.replace(/^#/, ``)

const get_param = key => new URLSearchParams(get_params_string_from_browser()).get(key)
const push_param = (key, value) => {
	const params = new URLSearchParams(get_params_string_from_browser())
	params.set(key, value)
	location.hash = params.toString()
}
const replace_param = (key, value) => {
	const params = new URLSearchParams(get_params_string_from_browser())
	params.set(key, value)
	history.replaceState({}, ``, `#` + params.toString())
}

import { writable } from 'svelte/store'

export const param_store = ({ param_name, replace = false, initial_value = get_param(param_name) }) => {
	const { subscribe, set } = writable(initial_value)

	const set_param = replace ? replace_param : push_param

	set_param(param_name, initial_value)

	const change_listener = () => {
		set(get_param(param_name))
	}

	window.addEventListener(`hashchange`, change_listener)

	return {
		subscribe(cb) {
			const unsubscribe = subscribe(cb)
			return () => {
				window.removeEventListener(`hashchange`, change_listener)
				unsubscribe()
			}
		},
		set(value) {
			set_param(param_name, value)
			set(value)
		},
	}
}

export const object_serializer_store = ({
	param_name,
	replace,
	default_values,
	serialize,
	deserialize,
}) => {
	const { subscribe, set } = param_store({
		param_name,
		replace,
		initial_value: serialize({
			...default_values,
			...deserialize(get_param(param_name)),
		}),
	})

	return {
		subscribe(cb) {
			const translator = serialized_value => {
				const value = deserialize(serialized_value)
				cb(value)
			}
			return subscribe(translator)
		},
		set(value) {
			set(serialize(value))
		},
	}
}
