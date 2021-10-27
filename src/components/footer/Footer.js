export default function Footer({ version, repositorio, linkedin, github }) {
	return (
		<>
			<div className="fixed-bottom bg-dark text-white px-2">
				<div className="row m-2">
					<div className="col"></div>
					<div className="col">
						<a href={linkedin}>linkedin</a>
						<a href={github}>github</a>
					</div>
					<div className="col">
						<div className="text-end">
							<p>
								<a href={repositorio}>Repositorio </a>- Version -
								<span className="fw-bold">{version}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
