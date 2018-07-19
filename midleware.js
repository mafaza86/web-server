var midleware = {
	requireAuthentication:function(req,res,next){
		console.log('private router hit!');
		next();
	},
	logger : function(req,res,next){
		console.log('REQUEST ' + new Date().toString()+ ' ' +  req.method + ' '+ req.originalUrl);
		next();
	}
};

module.exports = midleware;