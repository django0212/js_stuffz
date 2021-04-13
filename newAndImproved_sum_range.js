 console.clear()
// only change code below this line

function sum(a, b) {
	nums = [];
	sums = 0;
	for (var i=a; i<b+1;i++) {
		nums.push(i);
	}
	for (var i=0;i<nums.length;i++) {
		sums += nums[i];
	}
	console.log(sums)
}

sum(1, 10);
