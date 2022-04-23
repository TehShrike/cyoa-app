<script>
	export let Link, state, current_page_name

	$: current_saves = $state.saves

	const get_state_with_new_save = (current_page, current_state) => {
		const { saves } = current_state
		const new_saves = [
			...saves,
			{
				page: current_page,
				state: current_state,
			},
		]

		return {
			...current_state,
			saves: new_saves,
		}
	}

	$: current_saves_with_preserved_save_states = current_saves.map(
		({ page, state }) => ({
			page,
			state: {
				...state,
				saves: current_saves,
			},
		}),
	)

	const get_restore_state = state => ({
		...state,
		saves: current_saves,
	})

</script>

<span>
	{#if current_saves.length < 3}
		<Link state={get_state_with_new_save($current_page_name, $state)}>
			Save current status
		</Link>
	{/if}

	<div style="white-space: normal;">
		{#if current_saves.length > 0}
			({#each current_saves as {page, state}, i}
				<Link to={page} state={get_restore_state(state)}>Load save {i + 1}</Link>{#if i < current_saves.length - 1}, {/if}{/each})
		{/if}
	</div>
</span>

<style>
	span {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
