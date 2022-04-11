const { resolve } = require(`path`)
const { execSync: exec_sync } = require(`child_process`)

const cheap_watch = require(`cheap-watch`)

const [ ,, input_directory, ...cmd_args ] = process.argv

const full_command = cmd_args.join(` `)

const absolute_path = resolve(__dirname, input_directory)

const watcher = new cheap_watch({
	dir: absolute_path,
})

const execute = () => exec_sync(full_command, {
	stdio: `inherit`,
})

execute()

watcher.init()

watcher.on(`+`, execute)

