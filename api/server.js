const router = require("./router")
const utils = require("./utils")

module.exports = function(req, res) {
	const { decoder, handler } = utils(req)

	let buffer = ""
	req.on("data", data => {
		buffer += decoder.write(data)
	})

	req.on("end", () => {
		buffer += decoder.end()
		handler(res, buffer)
	})
}