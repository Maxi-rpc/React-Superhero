import "./Footer.css";
import { Version, GithubRep, Linkedin, Github } from "../../services/Config";

export default function Footer() {
	return (
		<>
			<div className="fixed-bottom bg-dark text-white px-2">
				<div className="row m-2">
					<div className="col">
						<ul className="social">
							<li className="social-icon">
								<a href={Linkedin}>
									<i class="fab fa-linkedin-in"></i>
								</a>
							</li>
							<li className="social-icon">
								<a href={Github}>
									<i class="fab fa-github"></i>
								</a>
							</li>
						</ul>
					</div>
					<div className="col">
						<div className="text-end">
							<p>
								Version<span className="fw-bold"> - {Version} - </span>
								<a className="btn btn-sm btn-outline-info" href={GithubRep}>
									Link al repo
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
