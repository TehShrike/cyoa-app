<script>
	import Save from './helpers/Save.svelte'
	import initial_state from './initial_state.js'

	export let Link, state, current_page_name
</script>

<div class=container>
	<div class=section>
		<slot></slot>
	</div>

	<footer>
		{#if $current_page_name === `Score`}
			<span class=currently_on>Score</span>
		{:else}
			<Link to=Score>Score</Link>
		{/if}

		{#if $current_page_name === `Inventory`}
			<span class=currently_on>Inventory</span>
		{:else}
			<Link to=Inventory>Inventory</Link>
		{/if}

		<Save
			{Link}
			{state}
			{current_page_name}
		/>

		<Link to=078_gymnasium state={initial_state}>
			Reset
		</Link>
	</footer>
</div>

<style>
	.container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
		padding: 16px;

		white-space: normal;

		--blue: #3939ff;
		--green: #00a800;
		--gray: #939393;
	}

	.section {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	footer {
		padding-top: 16px;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.currently_on {
		font-weight: 700;
	}

	.container :global(p),
	.container :global(button),
	.container :global(a) {
		font-size: 16px;
	}

	.container :global(hr) {
		color: var(--gray);
	}
</style>
