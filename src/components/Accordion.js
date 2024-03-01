import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el CSS de Bootstrap

import categories from '../info.json';
import ItemAccordion from './ItemAccordion';

function Accordion() {
    const dataArray = Array.isArray(categories) ? categories : [categories];
    const itemList = [];
    dataArray.forEach(element => {
      itemList.push(<ItemAccordion title={element.nombre} />);
    });
    return (
        <div className="accordion">
            {itemList}
        </div>
    );
}

export default Accordion;