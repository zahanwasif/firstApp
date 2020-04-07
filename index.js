var reac = require('./formulas');

function solveRect(l, b) {
	console.log('Solving for rectangle with l = ' + l + ' and b = ' + b);
	reac(l, b, (err, rec) => {
		if (err) {
			console.log(err.message);
		} else {
			console.log(rec.area());
		}
	});
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
