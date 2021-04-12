console.clear()
// only change code below this line

function isPrime(a) {
	if (a<=1) {
		console.log("Input has to be greather than 1.")
	} else {
		for (i=2;i<a;i++) {
			if (a%i==0) {
				console.log(a + " is not a prime number.")
			} else {
				console.log(a + " is a prime number.")
			}
		}
	}
}
