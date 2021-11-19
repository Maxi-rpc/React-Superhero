export const Card = ({ nombre, imagen, powerStats }) => {
  return (
    <>
      <div className="card">
        <div className="card-header">{nombre}</div>
        <img src={imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">powerStats</p>
          <a href="#" className="btn btn-sm btn-info">
            Detalle
          </a>
          <a href="#" className="btn btn-sm btn-danger">
            Eliminar
          </a>
        </div>
      </div>
    </>
  );
};
