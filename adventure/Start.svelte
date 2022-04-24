<script context=module>
	import initial_state from './initial_state.js'

	export {
		initial_state,
	}
</script>

<script>
	import Action from './helpers/Action.svelte'
	import Blue from './helpers/Blue.svelte'

	export let Link
</script>

<h1>Blackboard Jungle</h1>

<p>Can you find your homework and avoid detention, or are you doomed to a weekend of staring at the wall?</p>

<Link to=078_gymnasium>Start</Link>

<h3>
	Blackboard Jungle isn't a traditional choose your own adventure
</h3>

<p>
	This adventure is from Parsely, a sweet 80s adventure game/RPG project by Jared Sorensen.  I used it as my demo/prototype for this CYOA framework because
</p>

<ol>
	<li>I like Parsely a lot</li>
	<li>With the basic inventory-tracking and scoring system, it seemed like a good baseline of behaviors that I wanted to support</li>
	<li>The Blackboard Jungle adventure is pretty short and didn't take a ton of time to implement</li>
</ol>

<p>
	If this is your first time hearing about Parsely, click below to grok the concept.
</p>

<Action summary='Parsely "Readme": introduction'>
	<p>
		Parsely games are based on the old text-
		adventure parsers from the late 1970s and
		early 1980s-games such as Colossal Cave
		Adventure, Zork and Planetfall. In this version, a
		person replaces the computer, and a map and script
		replace the software.
	</p>
	<p>
		One person (most likely you) is the Parser, the name
		given to the program that runs a text adventure.
		It's your job to relay the game world to the players.
		You describe what the character sees, the results of
		their actions and anything else appearing in the
		game. You also keep track of the character's current
		location, inventory and score. Refer to yourself as
		"I" when talking to the players.
	</p>
	<p>
		Everyone else playing the game shares one
		character. Refer to each player as "you" during
		the game. You need at least two humans to play
		a Parsely game: a Parser and a player. There's no
		limit to the number of players, making Parsely
		games ideal for parties, conventions and other large
		gatherings of geeks who are into this kind of thing.
	</p>
	<p>
		Action Castle was created in 2003, on the fly, at a
		friend's party. Years later, I'd often bring it with me
		to game conventions, first with 30 players, then
		60, then 200, and eventually over 400! My pal and
		fellow game designer, Luke Crane, persuaded me
		to publish it as a Z-fold pamphlet in 2009. Now it's
		time to delve back into the source code, recompile it
		all and bundle it together for this book.
	</p>
	<p>
		Would you like to play a game (Y/N)?
	</p>
	<p>
		- Jared Sorensen
	</p>
	<p>
		April Fools' Day, 2017
	</p>
</Action>

<Action summary="How Parsely Works">
	<p>
		The first step is to welcome the players–
		sound effects and extravagant gestures are
		optional. Descriptions and other text to be
		read aloud to the players is in black, like this text.
		Information for the Parser (that is not to be read
		directly to the players) is in <span class="basic-blue">blue</span>. Sometimes the
		blue text indicates the room or object, other times
		the > symbol will precede a longer description.
	</p>

	<p>
		So, after starting the game with a warm welcome.
	</p>

	<p>
		"Welcome to Action Castle!"
	</p>

	<p>
	...proceed by describing the starting room, its
	contents and its exits:
	</p>

	<p>
	You are standing in a small cottage. There is a fishing
	pole here. A door leads outside.
	</p>

	<Blue>
		Sometimes the description of a room will
		change because of the players' actions. For
		example, when an object is taken, omit that
		object from the room's description.
	</Blue>

	<p>
		After the players visit the same room a few times,
		feel free to go into BRIEF mode and limit your
		description to just the name of the room. Be as
		helpful or as vague as you wish. If the players
		use the LOOK command, repeat the room's full
		description, with exits.
	</p>

	<h3>Turns & Time</h3>

	<p>
		Each player gets to take a turn to give a command-
		usually a one-word or two-word action in this
		format: [verb] [noun].
	</p>
	<p>
		Examples:
	</p>
	<p>
		<span class="basic-blue">GO WEST. TAKE KEY. CLIMB TREE, SMELL ROSE</span>
		or <span class="basic-blue">WEAR CROWN</span>
	</p>
	<p>
		You may allow similar phrases at your discretion.
		SNIFF ROSE and CLIMB UP are fine.
		ROSE'S SCENT and SHIMMY UP TREE, not
		so much.
	</p>
	<p>
		Sometimes you'll need more information from the
		player making the command.  Anything you ask
		may be answered by the current player, as in the
		following example:
	</p>
	<p>
		<span class="basic-blue">CATCH FISH: </span>
		What do you want to use to catch
		a fish?
	</p>
	<p>
		<span class="basic-blue">FISHING POLE:</span> You catch a fish!
	</p>
	<p>
		Feel free to allow more complex commands-as long
		as players don't go overboard (i.e. don't allow "then
		"and" commands)-such as:
	</p>
	<p>
		<span class="basic-blue">CATCH FISH WITH FISHING POLE</span>
	</p>
	<p>
		Unless a player is questioning a character,
		commands should be statements:
	</p>
	<p>
		<span class="basic-blue">CAN I GO WEST?</span> I dunno! Can you?
	</p>
	<p>
		Characters may be addressed by using the format
		[character], [question]; or by using ASK [character]
		ABOUT [topic], as in the following two examples:
	</p>
	<p>
		<span class="basic-blue">PRINCESS, CAN YOU LEAVE THIS TOWER?</span> The
		princess shakes her head no.
	</p>
	<p>
		<span class="basic-blue">ASK PRINCESS ABOUT THE KING:</span>
		"Father died several years ago. They say his restless spirit still
		haunts this castle."
	</p>
	<p>
		When a player examines an object or character,
		read them the description or make one up if it's not
		important to the puzzle. You can also be vague, play
		dumb or crack wise:
	</p>
	<p>
		<span class="basic-blue">EXAMINE POND:</span> You see fish swimming below the pond's surface.
	</p>
	<p>
		<span class="basic-blue">EXAMINE POLE:</span> The fishing pole consists of a stick, some string and a hook.
	</p>
	<p>
		<span class="basic-blue">EXAMINE HOOK:</span> It's a hook... a plot hook *twirls mustache*
	</p>
	<p>
		Once all the players have taken a turn, loop back to
		the first player and continue until the players win,
		time expires or everyone gets mad and goes home
		Turns aren't the only factor they need to worry about!
		Each game should last no more than 60-90 minutes.
		Failing to complete the game within the allotted time
		span results in a "Game Over" and final score.
	</p>
</Action>

<p>
	You should <a href="https://www.memento-mori.com/books/parsely-book" rel="external nofollow noopener">buy the hardcover Parsely book with all 13 adventures</a> (or just the <a href="https://jaredsorensen.itch.io/parsely" rel="external nofollow noopener">PDF</a> if you prefer).
</p>

<style>
	.basic-blue {
		color: var(--blue);
	}
</style>
