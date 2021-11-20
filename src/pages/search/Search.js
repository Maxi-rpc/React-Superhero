import { Title } from "../../components/title/Title";
import { SearchBar } from "../../components/form/SearchBar";
export default function Search() {
	return (
		<>
			<Title titulo="Buscador"></Title>
			<div className="row justify-content-center">
				<div className="col-6">
					<SearchBar></SearchBar>
				</div>
			</div>
		</>
	);
}
