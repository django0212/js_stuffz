  console.clear()
// only change code below this line

function sum(a, b) {
	count = 0;
	for (var i = a; i < b+1; i++) {
		count += 1;
	}
	sum = ((a+b)/2)*count;
	console.log(sum);
}

sum(1, 10);
