<script>
	import Action from './Action.svelte'
	import Blue from './Blue.svelte'

	export let Link, Links, state

	let examined_cart = false
	let pushed_cart = false
	let found_freshman = false
</script>

<h2>Locker Room</h2>

<p>
	You are in one of Parsely High's locker rooms.  There is a janitor's cart here.
</p>

<Action
	summary="Examine cart"
	bind:selected={examined_cart}
>
	<p>The janitor's cart is more or less a trash can on wheels.  A <u>bucket</u> of pink sawdust and a <u>broom</u> hang from the cart.</p>

	<Blue>The player can push the cart around or take the individual items.</Blue>
</Action>

{#if examined_cart}
	<Action summary="Take bucket" bind:selected={$state.have_bucket}>👍</Action>

	<Action summary="Take broom" bind:selected={$state.have_broom}>👍</Action>

	<Action summary="Push cart" bind:selected={pushed_cart}>You hear someone cry out in alarm from inside the cart's trash can.</Action>

	<Action summary="Examine trash can" bind:selected={found_freshman}>You find a freshman.</Action>

	{#if found_freshman}
		<Action summary="Talk to freshman">Are you serious?  Someone might see you!</Action>

		<Action summary="Help freshman">The freshman runs off crying.</Action>
	{/if}
{/if}

<Links>
	<Link to=078_gymnasium>Go North: Gymnasium</Link>
</Links>
