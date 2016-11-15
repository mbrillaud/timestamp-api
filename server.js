var express = require('express');
var app = express();
var moment = require('moment');

app.get('/:timestamp', (req,res) => {
	var time = moment(req.params.timestamp, 'MMMM DD, YYYY', true);
	
	if (!time.isValid()) {
		time = moment.unix(req.params.timestamp);
	}
	
	if (!time.isValid()) {
		res.json({
			'Natural': null,
			'unix': null
		});
	}
	
	res.json({
		'Natural': time.format('MMMM DD, YYYY'),
		'unix': time.format('X')
	});
  
});

app.listen(8080, () => {
	console.log("Listening on : 8080");
})