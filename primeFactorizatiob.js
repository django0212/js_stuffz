  
console.clear()
// only change code below this line

function factor(a) {
	var nums = [];
	if (a <= 1) {
		console.log("Input has to be greater than 1.");
	} else {
		for (var i=2; i<a+1;) {
			if (a%i==0) {
				nums.push(i);
				a/=i;
				continue;
			} else {
				i++;
			}
		}
	}
	console.log(nums)
	return nums;
}

factor(10)
