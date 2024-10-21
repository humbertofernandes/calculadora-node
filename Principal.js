const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const soma = require('./soma');
const subtracao = require('./subtracao');
const multiplicacao = require('./multiplicacao');
const divisao = require('./divisao');

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/soma', function (req, res) {
	if (!req?.body) {
		return res.status(500).send("Server Error");
	}
	if (!req.body?.num1 || !req.body?.num2) {
		console.log(req.body)
		console.log(req.body?.num1)
		console.log(req.body?.num2)
		 res.status(400).send("Erro de cálculo");
	} else {
		let num1 = req.body.num1;
		let num2 = req.body.num2;
		let result = soma(num1, num2);
		console.log("result= ", result);
		res.json({result: result});
	}
});

app.post('/subtracao', function (req, res) {
	if (!req.body?.num1 || !req.body?.num2) {
		return res.status(400).send("Erro de cálculo");
	} else {
		let num1 = req.body.num1;
		let num2 = req.body.num2;
		let result = subtracao(num1, num2);
		console.log("result= ", result);
		res.json({result: result});
	}
});

app.post('/multiplicacao', function (req, res) {
	if (!req.body?.num1 || !req.body?.num2) {
		return res.status(400).send("Texto");
	} else {
		let num1 = req.body.num1;
		let num2 = req.body.num2;
		let result = multiplicacao(num1, num2);
		console.log("result= ", result);
		res.json({result: result});
	}
});

app.post('/divisao', function (req, res) {
	if (!req.body?.num1 || !req.body?.num2) {
		return res.status(400).send("Texto");
	} else {
		let num1 = req.body.num1;
		let num2 = req.body.num2;
		let result = divisao(num1, num2);
		console.log("result= ", result);
		res.json({result: result});
	}
});

app.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');