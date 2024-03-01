import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el CSS de Bootstrap
import categories from '../info.json';

function Links({ title }) {
  const info = categories.find(category => category.nombre === title);
  const array = info.links;

  const itemList = [];

  if (array.length > 0) {
    array.forEach(element => {
      itemList.push(
        <div className="row mb-2">
          <a className="col-md-4 container row align-items-center text-center link" href={element.link} rel="noreferrer" target="_blank">
            <span className="nombre-link border p-2 rounded">{element.nombre}</span>
          </a>
          <p className="col-md-8 text-justify  description">{element.descripcion}</p>
        </div>
      );
    });
  }
  return <div>{itemList}</div>;
}

export default Links;
