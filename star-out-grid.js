function starOutGrid(grid) {
	// for (let subArr of grid) {
	// 	let indexes = subArr
	// 		.map(function (elm, idx) {
	// 			if (elm == "*") {
	// 				return idx;
	// 			}
	// 		})
	// 		.filter((el) => el != undefined);
	// 	for (let j = 0; j < grid.length; j++) {
	// 		for (let index of indexes) {
	// 			grid[j][index] = "*";
	// 		}
	// 	}
	// }
	grid.forEach((arr) => {
		if (arr.includes("*")) {
			for (var i = 0; i < arr.length; i++) {
				arr.splice(i, i, "*");
			}
		}
	});
	console.log(grid);
	return grid;
}
