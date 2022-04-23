<script>
	import Button from './ButtonThatLooksLikeALink.svelte'

	export let Link, state

	$: score_opportunities = [{
		text: `Retrieving the cat-eye glasses`,
		points: 5,
		achieved: $state.retrieved_the_cat_eye_glasses,
	}, {
		text: `Sweeping up the hallway`,
		points: 1,
		achieved: $state.sweeped_up_the_hallway,
	}, {
		text: `Rescuing the freshman`,
		points: 1,
		achieved: $state.rescued_the_freshman,
	}, {
		text: `Returning the cat-eye glasses`,
		points: 10,
		achieved: $state.returned_the_cat_eye_glasses,
	}, {
		text: `Unlocking your locker`,
		points: 10,
		achieved: $state.unlocked_your_locker,
	}, {
		text: `...on the first try!`,
		points: 2,
		achieved: $state.unlocked_your_locker
			&& $state.locker_unlock_attempts === 1,
	}, {
		text: `Handing in your English homework`,
		points: 20,
		achieved: $state.handed_in_your_english_homework,
	}, {
		text: `Finishing without saving`,
		points: 1,
		achieved: $state.handed_in_your_english_homework
			&& $state.saves.length === 0,
	}]

	const sum_points = (total, { points }) => total + points

	$: total_possible = score_opportunities.reduce(sum_points, 0)
	$: total_achieved = score_opportunities.filter(({ achieved }) => achieved)
		.reduce(sum_points, 0)
</script>

<h2>Score</h2>

<ul>
	{#each score_opportunities as {text, points, achieved}}
		<li data-achieved={achieved}>
			<span>
				<span class="bullet">
					{#if achieved}
						✔
					{:else}
						•
					{/if}
				</span>

				{text}
			</span>
			<span class=points>
				{points}
			</span>
		</li>
	{/each}
</ul>

<div>
	<strong>
		Final score: {total_achieved} / {total_possible}
	</strong>
</div>

<div>
	{#if history.length > 1}
		<Button on:click={() => history.back()} class=looks_like_a_link>
			Close Score
		</Button>
	{:else}
		<Link to=Start>
			Close Score
		</Link>
	{/if}
</div>

<style>
	[data-achieved=true] {
		font-weight: 700;
	}
	[data-achieved=true] .bullet {
		color: var(--green);
	}

	ul {
		padding: 0;
		list-style-type: none;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	li {
		display: flex;
		justify-content: space-between;
	}

	.points {
		font-variant-numeric: tabular-nums;
	}
</style>
