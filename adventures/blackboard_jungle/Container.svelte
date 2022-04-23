<script>
	export let Link, Links, state
</script>

<div class=container>
	<div class=section>
		<slot></slot>
	</div>

	<footer>
		<Link to=Score>Score</Link>
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
		border-top: 1px solid var(--gray);
		padding-top: 16px;

		display: flex;
		justify-content: space-between;
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
