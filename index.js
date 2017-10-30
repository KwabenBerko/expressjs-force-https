const forceHTTPS = (req, res, next) => {
	if(!req.secure){
		return res.redirect('https://' + req.get('host') + req.url);
	}
	next();
}

const forceAzureHTTPS = (req, res, next) => {
	if(!req.get("x-arr-ssl")){
		return res.redirect('https://' + req.get('host') + req.url);
	}
	next();
}

module.exports = {
	forceHTTPS,
	forceAzureHTTPS
};