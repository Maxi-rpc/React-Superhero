import axios from "axios";
import { API } from "./Api";

export function GetHeroRandom() {
	const hero = {
		id: 0,
		name: "default",
		image: "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg",
		error: "",
	};
	axios
		.get(API + 1)
		.then((res) => {
			hero.image = res.data.image.url;
		})
		.catch((error) => {
			hero.error = error;
		});

	return hero.image;
}
