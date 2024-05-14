import {
	HttpAdapter,
	PokeApiFetchAdapter,
	PokeapiAdapter,
} from "../api/pokeapi.adapter";
import { PokeapiResp } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
	constructor(
		public readonly id: number,
		public name: string,
		private readonly httpSrv: HttpAdapter
	) {}

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
		// const { data } = await axios.get<PokeapiResp>("https://pokeapi.co/api/v2/pokemon/4");
		const data = await this.httpSrv.get<PokeapiResp>(
			"https://pokeapi.co/api/v2/pokemon/4"
		);
		return data.moves;
	}
}

/* console.log(charmander.imageUrl);
console.log(charmander);
charmander.scream();
charmander.speak(); */

const pokeapiAxios = new PokeapiAdapter();
const pokeapiFetch = new PokeApiFetchAdapter();
export const charmander = new Pokemon(4, "charmander clase", pokeapiAxios);
console.log(await charmander.getMoves());
