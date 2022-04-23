import rot13 from './rot13.js'

export const to_obfuscated_json = value => rot13(JSON.stringify(value))
export const from_obfuscated_json = string => {
	if (!string) {
		return {}
	}

	try {
		return JSON.parse(rot13(string))
	} catch (err) {
		console.error(err)
		return {}
	}
}
