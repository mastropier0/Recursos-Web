import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el CSS de Bootstrap

function Footer() {
  return (
    <footer className="row mt-3 p-3 bg-light">
      <div className="col-6 text-end border-end texto-footer">Hecho por Matias Alvira </div>
      <div className="col-6  text-start texto-footer">
        <a className="nombre-link me-1 p-1 rounded" href="https://github.com/mastropier0" rel="noreferrer" target="_blank">Github</a>
        <a className="nombre-link p-1 rounded" href="https://linkedin.com/in/matias-alvira" rel="noreferrer" target="_blank">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
