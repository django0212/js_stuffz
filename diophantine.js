console.clear()
// only change code below this line

function cal(x, y, sum) {
	for (var i = 1; i < 100; i++) {
		for (var j = 1; j < 100; j++) {
			if ((x*i)+(j*y)==sum) {
				console.log(`(${i}, ${j})`);
			}
		}
	}
}
