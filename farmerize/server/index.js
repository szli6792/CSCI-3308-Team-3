const express = require('express'),
	path = require('path'),
	app = express(),
	port = 8629;


app.use(express.json());

app.get('/api', (req, res) => res.json({ message: "Hello World!" }));
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
	console.log('test');
	res.sendFile(path.resolve('../client', 'build', 'index.html'))
});

app.listen(port);
console.log('App is listening on port ' + port);