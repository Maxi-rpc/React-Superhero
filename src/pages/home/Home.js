import GetHeroes from "../../services/GetHeroes";

export default function Home() {
	const heroes = GetHeroes();

	return (
		<>
			<h1>Home</h1>
		</>
	);
}
