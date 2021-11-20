export const Card = ({ nombre, imagen, powerStats }) => {
	let powers = {
		combat: powerStats.combat,
		durability: powerStats.durability,
		intelligence: powerStats.intelligence,
		power: powerStats.power,
		speed: powerStats.speed,
		strength: powerStats.strength,
	};

	let listPowers = Object.keys(powers).map((keyname, index) => (
		<li class="list-group-item text-uppercase">
			{keyname} <span class="badge bg-primary">{powers[keyname]}</span>
		</li>
	));

	return (
		<>
			<div className="card mb-5">
				<h5 className="card-header">{nombre}</h5>
				<img src={imagen} className="card-img-top" alt={nombre} />
				<div className="card-body">
					<ul class="list-group list-group-flush">{listPowers}</ul>
				</div>
				<div class="card-footer text-center">
					<button className="btn btn-sm btn-info">
						<i class="fas fa-search"></i>
					</button>
					<button className="btn btn-sm btn-danger">
						<i class="fas fa-trash-alt"></i>
					</button>
				</div>
			</div>
		</>
	);
};
