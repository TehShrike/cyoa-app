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
	<span class=icon>
		{#if selected}
			✔
		{:else}
			▶
		{/if}
	</span>
	<button on:click={on_click}>{summary}</button> {#if selected}<slot></slot>{/if}
</p>

<style>
	.icon {
		color: var(--gray);
	}

	[data-selected=true] .icon {
		color: var(--green);
	}

	button {
		cursor: pointer;
		color: var(--blue);
		text-decoration: underline;
		border: 0;
		padding: 0;
		background-color: transparent;
		font-size: initial;
	}
</style>
