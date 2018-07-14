module.exports = {
	"/": {
		"GET": res => {
			res.writeHead(200)
			res.end("Hello World API. To use, POST to /hello")
		},
		"POST": (res, buffer) => {
			res.setHeader("Content-Type", "application/json")
			res.writeHead(200)
			res.end("You POST-ed:\n" + JSON.stringify(buffer))
		}
	},
	default: res => {
		res.writeHead(404)
		res.end("Not Found")
	}
}