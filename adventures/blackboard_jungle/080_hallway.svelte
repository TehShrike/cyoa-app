<script>
	import Action from './Action.svelte'
	import Blue from './Blue.svelte'
	import Exits from './Exits.svelte'

	export let Link, state
</script>

<h2>Hallway (West)</h2>

<p>You're at the western end of a long hallway.  Someone appears to have had tummy troubles; there's a puddle of sick on the floor.  There's a classroom door here.  The gym is to the west.</p>

<Blue>
	Going east without cleaning up the puddle causes the player character to slip and fall, sustaining a mild concussion.
</Blue>

<Action summary="Examine Door">
	You see Mr. Bushel discussing last night's homework.  Oops.
</Action>

<Action summary="Examine puddle of sick">
	Yuck.  Looks like it was Salisbury steak day.  Where's the school janitor when you need him?
</Action>

{#if $state.carrying.bucket}
	<Action
		summary="Use pink sawdust"
		bind:selected={$state.cleaned_sick}
	>
		You cover up the slippery puddle.
		<Blue>The Hallway is now safe.  The player character may proceed up the Hallway.</Blue>
	</Action>
{/if}

{#if $state.carrying.broom}
	<Action
		summary="Sweep"
		bind:selected={$state.sweeped_up_the_hallway}
	>
		You'll make a fine janitor some day.
	</Action>
{/if}

<Exits>
	{#if $state.cleaned_sick}
		<Link to=081_hallway>Go East: Hallway</Link>
	{:else}
		<Action summary="Go East: Hallway">
			You wake up in the nurse's office with a terrible headache and blurred vision.  The school nurse sends you to the hospital for an MRI, just in case.  THE END.
		</Action>
	{/if}

	<Link to=078_gymnasium>
		Go West: Gymnasium
	</Link>

	<Link to=083_classroom>
		Go North: Classroom
	</Link>
</Exits>
