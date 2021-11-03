import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

export default function Template(props) {
	const content = props.children;
	return (
		<>
			<Navbar></Navbar>
			<div className="container-fluid bg-primary">{content}</div>
			<Footer></Footer>
		</>
	);
}
