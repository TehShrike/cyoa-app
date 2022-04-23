<div>
	<h3>Exits</h3>

	<div class=exits-list>
		<slot></slot>
	</div>
</div>

<style>
	h3	{
		border-top: 1px solid var(--gray);
		padding: 8px 0;
	}

	.exits-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>
