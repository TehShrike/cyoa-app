<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	import SectionLink from './SectionLink.svelte'
	import PassageLink from './PassageLink.svelte'

	export let name_to_id
	export let id_to_name
	export let id_to_component
	export let params

	const update_current_page = () => {
		$current_page_name = id_to_name[params.get(`page`)] || `Start`
	}

	const current_page_name = writable()
	update_current_page()

	$: params.set(`page`, name_to_id[$current_page_name])

	$: current_page_id = name_to_id[$current_page_name]
	$: current_page_component = id_to_component[current_page_id]

	setContext(`name_to_id`, name_to_id)
	setContext(`current_page_name`, current_page_name)
</script>

<svelte:window on:hashchange={update_current_page} />

<div>
	<svelte:component this={current_page_component} {SectionLink} {PassageLink} />
</div>

<style>
	div {
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;

		white-space: pre;
	}
</style>
