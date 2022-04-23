<script>
	import Action from './Action.svelte'
	import Blue from './Blue.svelte'
	import Exits from './Exits.svelte'

	export let Link, state

	let wearing_glasses = false
</script>

<h2>Gymnasium</h2>

{#if !wearing_glasses}
	<p>
		You are in the gym.  It's currently devoid of sweaty athletes and cheering fans.  You smell a locker room to the south.  The exit is to the east.  You see an eyeglasses case on the ground.
	</p>
{/if}

{#if !wearing_glasses}
	<Action
		summary="Examine case"
		bind:selected={$state.seen_glasses}
	>
		Inside the case are a pair of cat-eye glasses.
	</Action>

	<Action
		summary="Take case"
		bind:selected={$state.carrying.eyeglasses_case}
	>
		👍
	</Action>

	{#if $state.seen_glasses}
		<Action
			summary="Examine glasses"
		>
			The bedazzled cat-eye glasses aren't really your style.
		</Action>

		<Action
			summary="Take glasses"
			bind:selected={$state.carrying.cat_eye_glasses}
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

{#if wearing_glasses}
	<Action
		summary="Remove glasses"
		on:select={() => wearing_glasses = false}
	>
		Everything looks normal.
	</Action>
{/if}

{#if !wearing_glasses}
	<Exits>
		<Link to=079_locker_room>SOUTH: Locker Room</Link>

		<Link to=080_hallway>WEST: Hallway</Link>
	</Exits>
{/if}
