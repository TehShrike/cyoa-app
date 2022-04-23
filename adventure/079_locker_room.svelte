<script>
	import Action from './helpers/Action.svelte'
	import Blue from './helpers/Blue.svelte'
	import Exits from './helpers/Exits.svelte'

	export let Link, state

	let found_freshman = false
</script>

<h2>Locker Room</h2>

<p>
	You are in one of Parsely High's locker rooms.  There is a janitor's cart here.
</p>

<Action
	summary="Examine cart"
	bind:selected={$state.examined_cart_in_locker_room}
>
	<p>The janitor's cart is more or less a trash can on wheels.  A <u>bucket</u> of pink sawdust and a <u>broom</u> hang from the cart.</p>

	<Blue>The player can push the cart around or take the individual items.</Blue>
</Action>

{#if $state.examined_cart_in_locker_room}
	<Action summary="Take bucket" bind:selected={$state.carrying.bucket}>👍</Action>

	<Action summary="Take broom" bind:selected={$state.carrying.broom}>👍</Action>

	{#if !$state.rescued_the_freshman}
		<Action summary="Push cart">
			You hear someone cry out in alarm from inside the cart's trash can.
		</Action>
	
		<Action 
			summary="Examine trash can" 
			bind:selected={found_freshman}
		>
			You find a freshman.
		</Action>
	{/if}


	{#if found_freshman}
		<Action summary="Talk to freshman">
			Are you serious?  Someone might see you!
		</Action>

		<Action 
			summary="Help freshman" 
			bind:selected={$state.rescued_the_freshman}
		>
			The freshman runs off crying.
		</Action>
	{/if}
{/if}

<Exits>
	<Link to=078_gymnasium>Go North: Gymnasium</Link>
</Exits>
