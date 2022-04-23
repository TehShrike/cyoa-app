<script>
	import { getContext } from 'svelte'

	import { to_obfuscated_json } from './state_serialization.mjs'

	const current_page_name = getContext(`current_page_name`)
	const adventure_state = getContext(`adventure_state`)

	export let to = null
	export let state = null

	$: target_state = state === null
		? $adventure_state
		: state

	$: target_page = to === null
		? $current_page_name
		: to

	const is_left_click = event => event.button === 0
	const is_modified_by_key_press = event => !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)

	const should_intercept_click = event => !event.defaultPrevented
		&& !is_modified_by_key_press(event)
		&& is_left_click(event)

	const name_to_id = getContext(`name_to_id`)

	$: link_target_id = name_to_id[target_page]

	$: link_target_id || console.error(`No component found named`, target_page)

	const on_click = event => {
		if (should_intercept_click(event)) {
			$current_page_name = target_page
			$adventure_state = target_state

			event.preventDefault()
		}
	}
</script>

{#if link_target_id}
	<a
		href="#?page={link_target_id}&state={to_obfuscated_json(target_state)}"
		on:click={on_click}
	>
		<slot></slot>
	</a>
{:else}
	<p>
		<slot></slot> <span style="color: red">(There is no page named "<span style="font-family: monospace">{target_page}</span>")</span>
	</p>
{/if}

<style>
	a, p {
		white-space: nowrap;
		padding: 4px 0;
	}
</style>
