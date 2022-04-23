<script>
	import Action from './Action.svelte'
	import Blue from './Blue.svelte'

	export let Link, Links, state

	let wearing_glasses = false
</script>

<h2>Gymnasium</h2>

{#if !wearing_glasses}
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
		bind:selected={$state.seen_glasses}
	>
		Inside the case are a pair of cat-eye glasses.
	</Action>

	{#if $state.seen_glasses}
		<Action
			summary="Examine glasses"
		>
			The bedazzled cat-eye glasses aren't really your style.
		</Action>

		<Action
			summary="Take glasses"
			bind:selected={$state.have_glasses}
		>
			👍
		</Action>
	{/if}
{/if}

{#if $state.seen_glasses}
	<Action
		summary="Wear glasses"
		bind:selected={wearing_glasses}
	>
		Everything is blurry and indistinct.

		<Blue>The player cannot see room contents, exits, or examine objects while wearing the glasses.</Blue>
	</Action>
{/if}

{#if !wearing_glasses}
	<Links>
		<Link to=079_locker_room>SOUTH: locker room</Link>

		<Link to=080_hallway>WEST: Hallway</Link>
	</Links>
{/if}
