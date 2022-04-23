<script>
	import { getContext } from 'svelte'

	export let to

	const is_left_click = event => event.button === 0
	const is_modified_by_key_press = event => !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)

	const should_intercept_click = event => !event.defaultPrevented
		&& !is_modified_by_key_press(event)
		&& is_left_click(event)

	const name_to_id = getContext(`name_to_id`)

	$: link_target_id = name_to_id[to]

	$: link_target_id || console.error(`No component found named`, to)

	const current_page_name = getContext(`current_page_name`)

	const on_click = event => {
		if (should_intercept_click(event)) {
			$current_page_name = to
			event.preventDefault()
		}
	}
</script>

{#if link_target_id}
	<a href="?page={link_target_id}" on:click={on_click}>
		<slot></slot>
	</a>
{:else}
	<p>
		<slot></slot> <span style="color: red">(There is no page named "<span style="font-family: monospace">{to}</span>")</span>
	</p>
{/if}

<style>
	a {
		padding: 4px 0;
	}
</style>
