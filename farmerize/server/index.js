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
		console.log('in search')
		if (err) {
			console.log('Failed to establish Database connection.', err.stack);
			next(err);
		}
		const searchterm = req.query.searchterm;
		const query = `SELECT * from farmerize.dbo.products where Name like '%`+searchterm+`%' or Category like '%`+searchterm+`%'`;
		console.log(query)
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

app.post('/api/sql/subscribe', (req, res, next) => {
	sql.connect(config, err => {
		if (err) {
			console.log('Failed to establish Database connection.', err.stack);
			next(err);
		}
		const email = req.query.email;
		const query = `INSERT INTO farmerize.dbo.subscriptions (Email) VALUES ('`+email+`')`;
		const request = new sql.Request();
		request.query(query, (err, result) => {
			if (err) {
				console.log('Query Failed', err.stack);
				next(err);
			}
			else {
				console.log('inserted email')
				res.json(200);
			}
		});
	});
});

app.post('/api/sql/createuser', (req, res, next) => {
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
		const query = `INSERT INTO farmerize.dbo.users (First, Last, Phone, Email, Address, Age, Password) VALUES ('`+first+`','`+last+`','`+phone+`','`+email+`','`+address+`',`+age+`,'`+password+`')`;
		const request = new sql.Request();
		request.query(query, (err, result) => {
			if (err) {
				console.log('Query Failed', err.stack);
				next(err);
			}
			else {
				res.json(200);
				console.log('inserted user')
			}
		});
	});
});

app.post('/api/sql/createreview', (req, res, next) => {
	sql.connect(config, err => {
		if (err) {
			console.log('Failed to establish Database connection.', err.stack);
			next(err);
		}
		const productID = req.query.productID;
		const review = req.query.review;
		const rating = req.query.rating;
		const query = `INSERT INTO farmerize.dbo.reviews (ProductID, Review, Rating) VALUES ('`+productID+`','`+review+`','`+rating+`')`;
		const request = new sql.Request();
		request.query(query, (err, result) => {
			if (err) {
				console.log('Query Failed', err.stack);
				next(err);
			}
			else {
				res.json(200);
				console.log('inserted user')
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