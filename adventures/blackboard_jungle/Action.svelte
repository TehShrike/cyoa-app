<script>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	export let summary

	let clicked = false

	const on_click = () => {
		if (!clicked) {
			clicked = true
			dispatch(`select`)
		}
	}
</script>

<p>
	<button on:click={on_click}>{summary}</button> {#if clicked}<slot></slot>{/if}
</p>

<style>
	button {
		cursor: pointer;
		color: blue;
		text-decoration: underline;
		border: 0;
		padding: 0;
		background-color: transparent;
		font-size: initial;
	}
</style>
