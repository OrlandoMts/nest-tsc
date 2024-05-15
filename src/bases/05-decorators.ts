class NewPokemon {
	constructor(public readonly id: number, public name: string) {}

	public scream() {
		console.log("NADAAA");
	}

	public speak() {
		console.log(`NO quiero hablar!`);
	}
}

// Un decorador es una funcion que tiene acceso a la definicion de la clase
const MyDecorator = () => {
	return (target: Function) => {
		// console.log(target);
		return NewPokemon; //Definicion, no es la instancia de "new"
	};
};

@MyDecorator()
export class Pokemon {
	constructor(public readonly id: number, public name: string) {}

	public scream() {
		console.log(`${this.name.toUpperCase()}!!`);
	}

	public speak() {
		console.log(`${this.name}, ${this.name}!`);
	}
}

export const charmander = new Pokemon(4, "charmander");
charmander.scream();
charmander.speak();
