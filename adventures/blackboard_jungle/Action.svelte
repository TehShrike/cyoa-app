<script>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	export let summary
	export let selected = false

	const on_click = () => {
		if (!selected) {
			selected = true
			dispatch(`select`)
		}
	}
</script>

<p data-selected={selected}>
	<span class=triangle>▶</span>
	<button on:click={on_click}>{summary}</button> {#if selected}<slot></slot>{/if}
</p>

<style>
	[data-selected=true] .triangle {
		color: gray;
	}

	button {
		cursor: pointer;
		color: darkblue;
		text-decoration: underline;
		border: 0;
		padding: 0;
		background-color: transparent;
		font-size: initial;
	}
</style>
