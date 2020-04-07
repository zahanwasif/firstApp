var reac = require('./formulas');
var solve = (x, y) => {
	console.log('perimeter: ' + reac.perimeter(x, y));
	console.log('area: ' + reac.area(x, y));
};

solve(5, 2);
