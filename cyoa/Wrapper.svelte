<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	import Link from './Link.svelte'

	export let Container
	export let name_to_id
	export let id_to_name
	export let id_to_component
	export let page_id_param
	export let adventure_state

	const update_current_page = page_id => {
		const new_page_name = id_to_name[page_id]
	
		if (!new_page_name) {
			throw new Error(`No such page "${new_page_name}"`)
		}

		$current_page_name = new_page_name
	}

	const current_page_name = writable()
	
	$current_page_name = id_to_name[$page_id_param] || `Start`
	$: update_current_page($page_id_param)

	$: $page_id_param = name_to_id[$current_page_name]

	$: current_page_id = name_to_id[$current_page_name]
	$: current_page_component = id_to_component[current_page_id]

	setContext(`name_to_id`, name_to_id)
	setContext(`current_page_name`, current_page_name)
	setContext(`adventure_state`, adventure_state)
</script>

<Container
	{Link}
	state={adventure_state}
	{current_page_name}
>
	<svelte:component
		this={current_page_component}
		{Link}
		state={adventure_state}
	/>
</Container>

<style>
	:global(*) {
		margin: 0;
		box-sizing: border-box;
	}

	:global(body) {
		color: #333;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	}
</style>
