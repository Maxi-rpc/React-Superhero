import { Title } from "../../components/title/Title";
import { Card } from "../../components/card/Card";
import { GetHeroDefault } from "../../services/GetHero";

export default function Home() {
	const heroe = GetHeroDefault();

	return (
		<>
			<Title titulo="Home"></Title>
			<div className="row">
				<div className="col-2">
					<Card
						nombre={heroe.name}
						imagen={heroe.image.url}
						powerStats={heroe.powerstats}
					></Card>
				</div>
			</div>
		</>
	);
}
