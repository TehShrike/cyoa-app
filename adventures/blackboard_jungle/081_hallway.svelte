<script>
	import Action from './Action.svelte'
	import Blue from './Blue.svelte'

	export let Link, Links, state
</script>

<h2>Hallway (East)</h2>

<p>
	You stand at the eastern end of a long hallway.  There are rows of lockers on either side of you.  You see the door leading to the library.
</p>

<Action
	summary="Examine Lockers"
	bind:selected={$state.examined_locker}
>
	You find your locker.  At least you think it's your locker.  It's been a while since you opened it.
</Action>

{#if $state.examined_locker}
	<Action
		summary="Open Locker"
		bind:selected={$state.tried_to_open_locker}
	>
		It's locked.  There's a combination lock on it.
	</Action>
{/if}

{#if $state.tried_to_open_locker}
	<Action
		summary="Examine Lock"
	>
		The lock is your basic tempered steel, 32-digit combination lock.  Very hard to crack!  You've tried.
	</Action>

	<Action
		summary="Use Combination 16-32-64"
	>
		The numbers on the lock don't go that high.
	</Action>

	<Action
		summary="Use Combination 8-16-32"
		bind:selected={$state.opened_locker}
	>
		The locker opens.  There are some typewritten papers inside.
	</Action>
{/if}

{#if $state.opened_locker}
	<Action
		summary="Examine Papers"
		bind:selected={$state.examined_locker}
	>
		It's your English <Blue>Homework</Blue> – something about something you were supposed to read.  You paid good money for this!
	</Action>	
{/if}

{#if $state.examined_locker}
	<Action
		summary="Take Homework"
		bind:selected={$state.have_homework}
	>
		👍
	</Action>
{/if}

<Links>
	<Link to=082_library>NORTH: Library</Link>
	<Link to=080_library>WEST: Hallway</Link>
</Links>
