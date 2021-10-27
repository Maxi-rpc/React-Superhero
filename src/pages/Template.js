import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Version, GithubRep, Linkedin, Github } from "../services/Config";

export default function Template(props) {
	const content = props.children;
	return (
		<>
			<Navbar></Navbar>
			{content}
			<Footer
				version={Version}
				repositorio={GithubRep}
				linkedin={Linkedin}
				github={Github}
			></Footer>
		</>
	);
}
