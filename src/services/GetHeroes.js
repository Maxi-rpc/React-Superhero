import axios from "axios";
import { API } from "./Api";

export default function GetHeroes() {
	const heroe = {
		id: "",
		name: "",
		image: "",
	};
	axios.get(API + 1).then((res) => {
		let hero = res.data;
		heroe.id = hero.id;
		heroe.name = hero.name;
		heroe.image = hero.image.url;
	});

	return heroe;
}
