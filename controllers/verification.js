module.exports = (req,res,next)=>{
	const hubChallenge = req.query['hub.challenge'];
	const hubMode = req.query['hub.mode'];
	const verifyTokenMatches = (req.query['hub.verify_token']==='test');

	if(hubMode && verifyTokenMatches){
		res.status(200).send(hubChallenge);
	}else{
		res.status(403).send("Unauthenticated")
	}
	
};

 

