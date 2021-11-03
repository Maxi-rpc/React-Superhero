import { GetHeroDefault } from "../../services/getHero";

export default function Banner() {
	const heroe = GetHeroDefault();
	return (
		<>
			<img src={heroe.image.url} alt="" className="img-fluid" />
		</>
	);
}
