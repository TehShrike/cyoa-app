<script>
	import Action from './Action.svelte'

	export let Link

	let seen_glasses = false
	let wearing_glasses = false
</script>

{#if wearing_glasses}
	<p>
		You can't see anything.  No exits, no items, nothing.
	</p>
{:else}
	<p>
		You are in the gym.  It's currently devoid of sweaty athletes and cheering fans.  You smell a locker room to the south.  The exit is to the east.  You see an eyeglasses case on the ground.
	</p>
{/if}

{#if wearing_glasses}
	<Action
		summary="Remove glasses"
		on:select={() => wearing_glasses = false}
	>
		Everything looks normal.
	</Action>
{:else}
	<Action
		summary="Examine case"
		on:select={() => seen_glasses = true}
	>
		Inside the case are a pair of cat-eye glasses.
	</Action>

	{#if seen_glasses}
		<Action
			summary="Examine glasses"
		>
			The bedazzled cat-eye glasses aren't really your style.
		</Action>

		<Action
			summary="Wear glasses"
			on:select={() => wearing_glasses = true}
		>
			Everything is blurry and indistinct.
		</Action>
	{/if}

	<Link to=79_locker_room>South: locker room</Link>

	<Link to=80_hallway>West: Hallway</Link>
{/if}

