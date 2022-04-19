<script>
	import Action from './Action.svelte'
	import Blue from './Blue.svelte'

	export let Link, Links, state

	let gave_glasses_to_librarian = false
</script>

<h2>Library</h2>

<p>
	You're in the library, where you usually spend much of your time... after school, in detention.  There is a study cubby here. There is a book here. Ms. Green, the librarian is here.
</p>

<Blue>
	If the player character never picked up the glasses or is sent to the library a second time: You spend the next four hours staring at the wall.  THE END.
</Blue>

{#if !$state.have_glasses || $state.visits_to_library > 1}
	<p>
		You spend the next four hours staring at the wall.  THE END.
	</p>
{/if}

<Action
	summary="Examine Librarian"
>
	<p>She squints at you. She asks, "Back again, eh?"</p>
</Action>

<Action
	summary="Examine Book"
>
	<p>
		The book's title is <i>Cryptography for Dummies</i>.  You remember skimming it during detention yesterday, but that seems like a long time ago.
	</p>
</Action>

<Action
	summary="Read Book"
>
	<p>
		You flip it open.  Someone wrote "Divide by two", in the margin of the book.  Oh, that was you!
	</p>
</Action>

<Action
	summary="Examine cubby"
>
	<p>
		The wood desk has the numbers 16-32-64 scratched into it.
	</p>

	<Blue>
		This is the players elaborate "code" for the combination. When divided by two, it reveals the correct combination: 8-16-32.
	</Blue>
</Action>

{#if $state.have_glasses || gave_glasses_to_librarian}
	<Action
		summary="Give Glasses to Librarian"
		on:select={() => {
			gave_glasses_to_librarian = true
			$state.have_glasses = false
		}}
	>
		<p>
			"Oh, thank you so much for these!  I can't see a thing without them!  Now, run along."
		</p>
	</Action>
	<Blue>
		If her glasses are returned, the librarian allows the player character to leave.
	</Blue>
{/if}

<Links>
	{#if gave_glasses_to_librarian}
		<Link to=081_hallway>SOUTH: Hallway</Link>
	{:else}
		<Action
			summary="SOUTH: Hallway"
		>
			<p>
				The librarian blocks your path and squints at you.  "You're here until the end of the day!"
			</p>
		</Action>
	{/if}
</Links>
