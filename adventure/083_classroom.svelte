<script>
	import Action from './helpers/Action.svelte'
	import Blue from './helpers/Blue.svelte'

	export let Link, state
</script>

<h2>Classroom</h2>

<p>
	You step into the classroom, and your English teacher, Mr. Bushel, clears his throat. "Late as usual. I sincerelv hope you remembered your homework." He holds out a hand.
</p>

{#if $state.carrying.homework}
	<Action
		summary="Give Homework to Mr. Bushel"
		bind:selected={$state.handed_in_your_english_homework}
	>
		<p>
			"Well, well.  Color me impressed!"
		</p>
		<p>
			Your scheme seems to have worked out, allowing you to survive one more day in the Blackboard Jungle.  THE END
		</p>
	</Action>
{:else}
	<Blue>
		If the player character doesn't have the English paper to turn in:
	</Blue>
	<p>
		Mr. Bushel sends you off to the library for detention.
	</p>
	<Blue>
		The player arrives in the Library.
	</Blue>
	<Link to=082_library>Go to the Library</Link>
{/if}
