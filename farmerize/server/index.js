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

app.get('/api/sql/getitem', (req,res,next) => {
	sql.connect(config, err => {
		if (err) {
			console.log('Failed to establish Database connection.', err.stack);
			next(err);
		}
		const id = req.query.id;
		const query = `SELECT * FROM farmerize.dbo.products WHERE ProductID=`+id+``;
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

app.get('/api/sql/search', (req,res,next) => {
	sql.connect(config, err => {
		if (err) {
			console.log('Failed to establish Database connection.', err.stack);
			next(err);
		}
		const search = req.query.search;
		const query = `SELECT * from farmerize.dbo.products where Name like '%`+search`%' or Category like '%`+search+`%'`;
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

app.get('/api/sql/getfeatured', (req,res,next) => {
	sql.connect(config, err => {
		if (err) {
			console.log('Failed to establish Database connection.', err.stack);
			next(err);
		}
		const query = `SELECT * from farmerize.dbo.products WHERE Special = 0`;
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

app.get('/api/sql/getpopular', (req,res,next) => {
	sql.connect(config, err => {
		if (err) {
			console.log('Failed to establish Database connection.', err.stack);
			next(err);
		}
		const query = `SELECT * from farmerize.dbo.products WHERE Special = 1`;
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

app.get('/api/sql/gethighest', (req,res,next) => {
	sql.connect(config, err => {
		if (err) {
			console.log('Failed to establish Database connection.', err.stack);
			next(err);
		}
		const query = `SELECT * from farmerize.dbo.products WHERE Special = 2`;
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

app.post('api/sql/subscribe', (req, res, next) => {
	sql.connect(config, err => {
		if (err) {
			console.log('Failed to establish Database connection.', err.stack);
			next(err);
		}
		const email = req.query.email;
		const query = `INSERT INTO farmerize.dbo.subscriptions (Email) VALUES (`+email+`)`;
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

app.post('api/sql/createuser', (req, res, next) => {
	sql.connect(config, err => {
		if (err) {
			console.log('Failed to establish Database connection.', err.stack);
			next(err);
		}
		const first = req.query.first;
		const last = req.query.last;
		const phone = req.query.phone;
		const email = req.query.email;
		const address = req.query.address;
		const age = req.query.age;
		const password = req.query.password;
		const query = `INSERT INTO farmerize.dbo.users (UserID, First, Last, Phone, Email, Address, Age, Password) VALUES (`+null+`,`+first+`,`+last+`,`+phone+`,`+email+`,`+address+`,`+age+`,`+password+`)`;
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

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
	console.log('test');
	res.sendFile(path.resolve('../client', 'build', 'index.html'))
});

app.listen(port);
console.log('App is listening on port ' + port);