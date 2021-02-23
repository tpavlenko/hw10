//  Cоздать конвертер-функцию которая получает на вход массив вида:

//  mass = [ [1,2,3, [3.1] ], 4, [ 5, 6, [7, 8, [9, 10, 15]]] ];

//  а на выходе получим переобразованый массив: [1 ,2, 3, 3.1, 4, 5, 6, 7, 8, 9, 10, 15]


var mass = [[1, 2, 3, [3.1]], 4, [5, 6, [7, 8, [9, 10, 15]]]];

function arrayConverter(mass) {
	for (var i = 0; i < mass.length; i++) {
		if (Array.isArray(mass[i])) {
			var result = mass.flat(Infinity);
			return console.log(result);
		}
	}
}

arrayConverter(mass)