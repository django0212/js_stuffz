console.clear()
// only change code below this line
// this function works only for postive numbers

function con(a) {
	var dic = [];
	while (a >= 1) {
		dic.push(Math.floor(a%2));
		a/=2;
	}
	console.log(dic.reverse().join(''));
}

con(720);
