import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el CSS de Bootstrap

function Footer() {
  return (
    <footer className="row mt-3 p-3 bg-light">
      <div className="col-6 text-end border-end texto-footer">Hecho por Matias Alvira </div>
      <div className="col-6  text-start texto-footer">
        <a className="nombre-link me-1 p-1 rounded" rel="noreferrer" target="_blank" href="https://github.com/mastropier0">Github</a>
        <a className="nombre-link p-1 rounded" rel="noreferrer" target="_blank" href="www.linkedin.com/in/matias-alvira">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
