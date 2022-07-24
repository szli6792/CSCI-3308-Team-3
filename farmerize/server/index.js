const express = require('express'),
	path = require('path'),
	app = express(),
	port = 8629;
const sql = require('mssql');
const config = {
	user: "farmerize_sa",
	password: "pass1234",
	database: 'master',
	server: 'ec2-54-183-139-130.us-west-1.compute.amazonaws.com',
	options: {
		trustServerCertificate: true
	}
};


app.use(express.json());

app.get('/api', (req, res) => res.json({ message: "Hello World!" }));
app.get('/api/testsql', (req,res,next) => {
	console.log('test sql')
	sql.connect(config, err => {
		if (err) {
			console.log('Failed to establish Database connection.', err.stack);
			next(err);
		}
		// const var1 = req.query.var;
		const query = `SELECT * FROM farmerize.dbo.products`;
		const request = new sql.Request();
		request.query(query, (err, result) => {
			if (err) {
				console.log('Query Failed', err.stack);
				next(err);
			}
			else {
				res.json(result.recordsets[0]);
			}
		});
	});
});

// app.post('api/inserttest', (req, res, next) => {
// 	sql.connect(config, err => {
// 		if (err) {
// 			console.log('Failed to establish Database connection.', err.stack);
// 			next(err);
// 		}
// 		const query = ``;
// 		const request = new sql.Request();
// 		request.query(query, (err, result) => {
// 			if (err) {
// 				console.log('Query Failed', err.stack);
// 				next(err);
// 			}
// 			else {
// 				res.json(result.recordsets[0]);
// 			}
// 		});
// 	});
// });

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
	console.log('test');
	res.sendFile(path.resolve('../client', 'build', 'index.html'))
});

app.listen(port);
console.log('App is listening on port ' + port);