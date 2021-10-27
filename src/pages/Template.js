import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

export default function Template(props) {
	const content = props.children;
	return (
		<>
			<Navbar></Navbar>
			{content}
			<Footer version="1.0.0"></Footer>
		</>
	);
}
