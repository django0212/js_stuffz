console.clear()
// only change code below this line

/* The "range" function returns all the numbers between two limits and the "sum" function sums the array passed to it. 
They can be used together as such: console.log(sum(range(1,10)). */

function range(a, b) {
	var rng = [];
	for (i=a;i<b+1;i++) {
		rng.push(i)
	}
	console.log(rng)
	return rng;
}

function sum(a) {
	sums = 0;
	for (i=0;i<a.length;i++) {
		sums += a[i]
	}
	console.log(sums)
}
