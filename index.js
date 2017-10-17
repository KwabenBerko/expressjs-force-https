const forceHttps = (req, res, next) => {
	if(!req.secure){
		let secureUrl = "https://" + req.headers['host'] + req.url;
		res.writeHead(301, { "Location":  secureUrl });
		return res.end();
	}
	next();
}

module.exports = forceHttps;