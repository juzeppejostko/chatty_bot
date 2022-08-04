const input = require('sync-input');


function greet(bot_name, birth_year) {
	console.log("Hello! My name is %s .", bot_name);
	console.log("I was created in %s .", birth_year);
}

function remind_name() {
	console.log("Please, remind me your name.");
	let your_name = input("> ");
	console.log('What a great name you have, %s !',your_name);
}

function guess_age() {
	console.log("Let me guess your age.");
	console.log("Enter remainders of dividing your age by 3, 5 and 7.");

	let remainder3 = input("> ");
	let remainder5 = input("> ");
	let remainder7 = input("> ");
	your_age = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105

	console.log("Your age is %d that's a good time to start programming!", your_age);
}

function count() {
	console.log("Now I will prove to you that I can count to any number you want.");

	let number = Number(input());
	let i = 0;

	while (i <= number) { // выводит 0, затем 1, затем 2
		console.log(i + " !");
		i++;
	}
}

function test() {
	console.log("Let's test your programming knowledge.");
	console.log("Why do we use methods?\n" +
		"1. To repeat a statement multiple times.\n" +
		"2. To decompose a program into several small subroutines.\n" +
		"3. To determine the execution time of a program.\n" +
		"4. To interrupt the execution of a program.");
	let answer = 0;
	while (answer !== 2) {
		answer = Number(input());
		if (answer !=2){
			console.log("Please, try again.");
		}
	}

}

function end() {
	console.log("Congratulations, have a nice day!");
}


greet('Max', '1980')  // change it as you need
remind_name();
guess_age();
count();
test();
end();
