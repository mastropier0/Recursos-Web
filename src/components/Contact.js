import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el CSS de Bootstrap

export default function Contact() {
  return (
    <form
      className="col-10 col-md-6 bg-light rounded p-4"
      action="https://formsubmit.co/4b53b0d36aad7a4ec27c84bfae7be4f3 "
      method="POST"
    >
      <h4>Feedback</h4>
      <p className="text-justify">
        Este es un proyecto Open Source y colaborativo, si querés saber más
        podés acceder al proyecto en <a href="https://github.com/mastropier0/Recursos-Web">GitHub</a> y ofrecer sugerencias
        mediante el formulario.
      </p>
      <div className="row mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Asunto"
          id="asunto"
          name="Asunto"
        />
      </div>
      <div className="row mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Tu email"
          id="email"
          name="Email"
        />
      </div>
      <div class="row">
        <textarea
          className="form-control"
          placeholder="Escribe tu comentario aquí..."
          id="mensaje"
          name="Mensaje"
        ></textarea>
      </div>
      <button type="submit" className="border rounded enviar p-2 mt-2">
        Enviar
      </button>
    </form>
  );
}
