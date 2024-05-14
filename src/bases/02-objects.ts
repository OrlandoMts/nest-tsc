export const pokemonIds = [1, 34, 56, 23];

interface PokemonItf {
	id: number;
	name: string;
	age: number;
}

export const bulbasaur: PokemonItf = {
	id: 1,
	name: "Bulbasaur",
	age: 2,
};

export const charmander: PokemonItf = {
	id: 1,
	name: "Charmander",
	age: 3,
};

export const pokemons: PokemonItf[] = [];

pokemons.push(bulbasaur);
// console.log(pokemons);
