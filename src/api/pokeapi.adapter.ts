import axios from "axios";

// Opcion 1 para la Sustitucion de Liskov, se aplica mucho en nest
export interface HttpAdapter {
	get<T>(url: string): Promise<T>;
}

// Opcion 2 para la Sustitucion de Liskov (debo hacer un extends y super en las clases hijas)
export abstract class Adapter {
	abstract get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
	async get<T>(url: string): Promise<T> {
		const data = await fetch(url);
		const res: T = await data.json();
		console.log("con fetch");
		return res;
	}
}

export class PokeapiAdapter implements HttpAdapter {
	private readonly axiosInstance = axios;

	async get<T>(url: string): Promise<T> {
		const { data } = await this.axiosInstance.get<T>(url);
		console.log("con axios");
		return data;
	}

	async post(url: string, data: unknown) {}
	async patch(url: string, data: unknown) {}
	async delete(url: string) {}
}
