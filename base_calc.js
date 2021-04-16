console.clear()
// only change code below this line
// a = number 1, b = number 2, c = base

function con(a, b) {
	var dic = [];
	while (a >= 1) {
		dic.push(Math.floor(a%b));
		a/=b;
	}
	return dic.reverse().join("");
}

function add(a, b, c) {
	var n1 = Array.from(String(a), Number);
	var n2 = Array.from(String(b), Number);
	var num1 = 0;
	var num2 = 0;

	if (n1.some(el => el > c-1) || n2.some(el => el > c-1) ) {
		console.log(`Input is not base ${c} compliant.`);
	} else {
		for (var i = 0; i < n1.length; i++) {
		num1 += (n1[i]) * (c**((n1.length-1) - i));
		};
		for (var i = 0; i < n2.length; i++) {
			num2 += (n2[i]) * (c**((n2.length-1) - i));
		};

		var sum = num1+num2;
		var conSum = con(sum, c);

		console.log(`Base 10: ${sum}`);
		console.log(`Base ${c}: ${conSum}`);
	}
}

function add(a, b, c) {
	var n1 = Array.from(String(a), Number);
	var n2 = Array.from(String(b), Number);
	var num1 = 0;
	var num2 = 0;

	if (n1.some(el => el > c-1) || n2.some(el => el > c-1) ) {
		console.log(`Input is not base ${c} compliant.`);
	} else {
		for (var i = 0; i < n1.length; i++) {
		num1 += (n1[i]) * (c**((n1.length-1) - i));
		};
		for (var i = 0; i < n2.length; i++) {
			num2 += (n2[i]) * (c**((n2.length-1) - i));
		};

		var sum = num1+num2;
		var conSum = con(sum, c);

		console.log(`Base 10: ${sum}`);
		console.log(`Base ${c}: ${conSum}`);
	}
}

function sub(a, b, c) {
	var n1 = Array.from(String(a), Number);
	var n2 = Array.from(String(b), Number);
	var num1 = 0;
	var num2 = 0;

	if (n1.some(el => el > c-1) || n2.some(el => el > c-1) ) {
		console.log(`Input is not base ${c} compliant.`);
	} else {
		for (var i = 0; i < n1.length; i++) {
		num1 += (n1[i]) * (c**((n1.length-1) - i));
		};
		for (var i = 0; i < n2.length; i++) {
			num2 += (n2[i]) * (c**((n2.length-1) - i));
		};

		var sum = num1-num2;
		var conSum = con(sum, c);

		console.log(`Base 10: ${sum}`);
		console.log(`Base ${c}: ${conSum}`);
	}
}

function mult(a, b, c) {
	var n1 = Array.from(String(a), Number);
	var n2 = Array.from(String(b), Number);
	var num1 = 0;
	var num2 = 0;

	if (n1.some(el => el > c-1) || n2.some(el => el > c-1) ) {
		console.log(`Input is not base ${c} compliant.`);
	} else {
		for (var i = 0; i < n1.length; i++) {
		num1 += (n1[i]) * (c**((n1.length-1) - i));
		};
		for (var i = 0; i < n2.length; i++) {
			num2 += (n2[i]) * (c**((n2.length-1) - i));
		};

		var sum = num1*num2;
		var conSum = con(sum, c);

		console.log(`Base 10: ${sum}`);
		console.log(`Base ${c}: ${conSum}`);
	}
}

function div(a, b, c) {
	var n1 = Array.from(String(a), Number);
	var n2 = Array.from(String(b), Number);
	var num1 = 0;
	var num2 = 0;

	if (n1.some(el => el > c-1) || n2.some(el => el > c-1) ) {
		console.log(`Input is not base ${c} compliant.`);
	} else {
		for (var i = 0; i < n1.length; i++) {
		num1 += (n1[i]) * (c**((n1.length-1) - i));
		};
		for (var i = 0; i < n2.length; i++) {
			num2 += (n2[i]) * (c**((n2.length-1) - i));
		};

		var sum = num1/num2;
		var conSum = con(sum, c);

		console.log(`Base 10: ${sum}`);
		console.log(`Base ${c}: ${conSum}`);
	}
}

div(4041, 11, 6);
