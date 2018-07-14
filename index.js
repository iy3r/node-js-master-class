const http = require("http")
const serverConfig = require("./api/server")

const server = http.createServer(serverConfig)

server.listen(3000, () => {
	console.log("Server listening on port 3000")
})