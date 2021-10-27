export default function Footer({ version }) {
	return (
		<>
			<div className="fixed-bottom bg-dark text-white px-2">
				<div className="text-end">
					<p className="m-2">
						Version - <span>{version}</span>
					</p>
				</div>
			</div>
		</>
	);
}
