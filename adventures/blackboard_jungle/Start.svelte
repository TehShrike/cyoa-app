<script context=module>
	export const initial_state = {
		retrieved_the_cat_eye_glasses: false,
		sweeped_up_the_hallway: false,
		rescued_the_freshman: false,
		returned_the_cat_eye_glasses: false,
		unlocked_your_locker: false,
		locker_unlock_attempts: 0,
		handed_in_your_english_homework: false,
		visits_to_library: 0,
		saves: [],
		carrying: {
			eyeglasses_case: false,
			cat_eye_glasses: false,
			bucket: false,
			broom: false,
			homework: false,
			book: false,
		},
	}
</script>

<script>
	export let Link, Links
</script>

<h1>Blackboard Jungle</h1>

<strong>Can you find your homework and avoid detention, or are you doomed to a weekend of staring at the wall?</strong>


<Links>
	<Link to=078_gymnasium>Start</Link>
</Links>
