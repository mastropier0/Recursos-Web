import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el CSS de Bootstrap
import '../styles/styles.css';
import Links from './Links';

function ItemAccordion({ title}) {
  return (
    <div className="mb-2 rounded">
      <h2 className="accordion-header rounded">
        <button
          className="accordion-button border border-success rounded collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={'#' + title}
          aria-expanded="false"
          aria-controls={title}
        >
          {title}
        </button>
      </h2>
      <div
        id={title}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body rounded ">
            <Links title={title}/>
        </div>
      </div>
    </div>
  );
}

export default ItemAccordion;
