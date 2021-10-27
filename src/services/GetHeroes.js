import axios from "axios";
import { API } from "./Api";

export default function GetHeroes() {
	let heroe = "soy heroe";
	axios
		.get(API + 1)
		.then((res) => {
			heroe = res.data;
		})
		.catch((error) => {
			heroe = error;
		});

	return heroe;
}
