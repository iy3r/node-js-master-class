const url = require("url")
const StringDecoder = require("string_decoder").StringDecoder;
const router = require("./router")

module.exports = function(req) {
	const parsedUrl = url.parse(req.url, true)	
	const path = "/" + parsedUrl.pathname.replace(/^\/+|\/+$/g, "")
	const query = parsedUrl.query
	const method = req.method.toUpperCase()
	const decoder = new StringDecoder("utf-8")
	
	let handler = router.default
	if (router[path]) {
		if (router[path][method]) {
			handler = router[path][method]
		}
	}

	return {
		path, query, method, decoder, handler
	}
}