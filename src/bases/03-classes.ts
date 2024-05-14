import axios from "axios";
import { PokeapiResp } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
	constructor(public readonly id: number, public name: string) {}

	get imageUrl(): string {
		return `https://pokemon.com/${this.id}.jpg`;
	}

	public scream() {
		console.log(`${this.name.toUpperCase()}!!`);
	}

	public speak() {
		console.log(`${this.name}, ${this.name}`);
	}

	public async getMoves() {
		const { data } = await axios.get<PokeapiResp>(
			"https://pokeapi.co/api/v2/pokemon/4"
		);
		return data.moves;
	}
}

export const charmander = new Pokemon(4, "charmander clase");
/* console.log(charmander.imageUrl);
console.log(charmander);
charmander.scream();
charmander.speak(); */

console.log(await charmander.getMoves());
