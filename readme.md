# Shrike's CYOA framework

Twine does a lot of work to give you that no-code experience, but by the time you're building anything meaningful, you're trying to figure out how to add custom JavaScript and do fancy styling stuff, right?

This CYOA framework gets out of your way and just gives you the basics you need to get started.  It's not no-code, but it's meant to be learnable the same way everyone learned JS and HTML back in the day: by copying and pasting simple patterns until you internalize how they work.

## What does the framework give you

- it displays the current page and handles links to other pages
- it stores state like inventory or the results of previous choices

Routing and state get magically serialized to the url for you.  You create the adventure pages that link to each other.

## How do I get started?

You'll need [node](https://nodejs.org/).  And [git](https://git-scm.com/downloads), if it's not on your machine already.

Run this:

```sh
git clone git@github.com:TehShrike/cyoa-app.git
npm i
npm run dev
```

and then start fiddling with the files in the `adventure` directory.

## What's the bare minimum your adventure needs

**A file named `Container.svelte` that has `<slot></slot>` somewhere inside it** - this is what shows up on every single page.  You can put your global links or style stuff in here.

**A file named `Start.svelte`** – this is the first page people will see when they visit your adventure.

Your `Start.svelte` file must include a `<script context=module>` element that contains the initial state for your adventure, like so:

```js
<script context=module>
	export const initial_state = {
		carrying_the_vorpal_blade: false
	}
</script>
```

## What magical bits does the framework give you?

In any of your components, you can include `export let Link` or `export let state` to be able to link to other pages, or store state.  You can also `export let current_page_name` to get the current page name, but you won't need that very often.

### `state`

You use the [`$`](https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values) symbol to access the magical values, like so:

```svelte
{#if $state.carrying_the_vorpal_blade}
	<b>You rock.</b>
{/if}
```

or

```svelte
<button on:click={() => $state.carrying_the_vorpal_blade = true}>
	Pick up the blade of destiny
</button>
```

### `Link`

Link to any other page in your adventure, using the file name without the `.svelte` suffix.

```svelte
<Link to=80_hallway>Walk down the creepy hallway</Link>
```

If you want to do something crazy, you can change the state when they click on the link too:

```svelte
<Link
	to=obvious_trap
	state={{ ...$state, is_probably_a_doofus: true }}
>
	Open the door covered in cobwebs
</Link>
```
## What shouldn't you do

Well, you probably shouldn't mess with the files in the `cyoa` directory.  That's the actual framework stuff.

Maybe at some point in the future this will be a "real" 1.0 framework, and I'll publish that stuff as its own separate tool.

But in the interest of facilitating wacky hacking, for now I like having everything in one repo like this.

## How to become a l33t hax0r

To learn more fancy bits about how the page templating works, check out the [Svelte documentation](https://svelte.dev/docs#template-syntax).  That's how the page components are handled.

## I need to ask someone a question

I like helping people make things.  I'm `TehShrike#4520` on Discord or [TehShrike](https://twitter.com/TehShrike) on Twitter.

# Todo

- Edit the `Start.svelte` of the demo so that it explains the concept behind Parsely
- publish to gh-pages?

# License

[WTFPL](https://wtfpl2.com/)
