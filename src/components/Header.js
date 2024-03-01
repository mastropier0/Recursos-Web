import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el CSS de Bootstrap

export default function Component() {
  return (
    <div className="header">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-4 fw-bold mb-3 p-3 rounded">
            Amplia tu conocimiento! 
          </h1>
          <hr/>
          <p className="lead mb-5 text-justify p-3 rounded fst-italic bg-light">
            Aquí encontraras recursos en la web que te apoyen en tus estudios y 
            potencien tu conocimiento.
          </p>
        </div>
      </div>
    </div>
  );
}
