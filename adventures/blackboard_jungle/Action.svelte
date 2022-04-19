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
	<span class=triangle>
		{#if selected}
			✔
		{:else}
			▶
		{/if}
	</span>
	<button on:click={on_click}>{summary}</button> {#if selected}<slot></slot>{/if}
</p>

<style>
	.triangle {
		color: gray;
	}

	[data-selected=true] .triangle {
		color: #00a800;
	}

	button {
		cursor: pointer;
		color: rgb(0, 0, 238);
		text-decoration: underline;
		border: 0;
		padding: 0;
		background-color: transparent;
		font-size: initial;
	}
</style>
