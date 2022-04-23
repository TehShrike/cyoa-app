<script>
	import Button from './ButtonThatLooksLikeALink.svelte'

	export let Link, state

	const item_names = {
		eyeglasses_case: `Eyeglasses case`,
		cat_eye_glasses: `Cat-eye glasses`,
		bucket: `Bucket`,
		broom: `Broom`,
		homework: `Homework`,
		book: `Book`,
	}

	$: inventory = Object.entries(item_names).map(([ identifier, name ]) => ({
		name,
		carrying: $state.carrying[identifier],
	}))
</script>

<h2>Inventory</h2>

<ul>
	{#each inventory as { name, carrying }}
		<li>
			<span data-carrying={carrying}>
				<span class="bullet">
					{#if carrying}
						🅇
					{:else}
						⃞
					{/if}
				</span>

				{name}
			</span>
		</li>
	{/each}
</ul>

<div>
	{#if history.length > 1}
		<Button on:click={() => history.back()} class=looks_like_a_link>
			Close Inventory
		</Button>
	{:else}
		<Link to=Start>
			Close Inventory
		</Link>
	{/if}
</div>

<style>
	ul {
		padding: 0;
		list-style-type: none;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	[data-carrying=true] {
		font-weight: 700;
	}
	[data-carrying=true] .bullet {
		color: var(--green);
	}
</style>
