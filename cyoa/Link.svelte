<script>
	import { getContext } from 'svelte'

	export let to

	const is_left_click = event => event.button === 0
	const is_modified_by_key_press = event => !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)

	const should_intercept_click = event => !event.defaultPrevented
		&& !is_modified_by_key_press(event)
		&& is_left_click(event)

	const name_to_id = getContext(`name_to_id`)

	$: console.log(`to is`, to)
	$: console.log(`name_to_id`, name_to_id)
	$: link_target_id = name_to_id[to]

	const current_page_name = getContext(`current_page_name`)

	const on_click = event => {
		if (should_intercept_click(event)) {
			$current_page_name = to
			event.preventDefault()
		}
	}
</script>

<a href="?page={link_target_id}" on:click={on_click}>
	<slot></slot>
</a>
