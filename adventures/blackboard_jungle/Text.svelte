<script>
	export let relevant
</script>

<span data-relevant={!relevant}>
	<slot></slot>
</span>

<style>
	[data-relevant=false] {
		text-decoration: line-through;
	}
</style>
