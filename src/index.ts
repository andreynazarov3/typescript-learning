abstract class Human {
	abstract walk(): void;
	hairColor: string;
	constructor(readonly weight: number) {}
}

class WhiteMan extends Human {
	walk() {
		console.log('i am walking');
	}
}

const man = new WhiteMan(2);

console.log(man, 'fff3f');
