import './css/Footer.css'

export const Footer = () => {
    return (
        <footer className="custom-footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h4>Enlaces rápidos</h4>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de nosotros</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h4>Contacto</h4>
        <p>Dirección: 123 San Martín, Ciudad de Mendoza</p>
        <p>Teléfono: (123) 456-7890</p>
        <p>Correo electrónico: tulocalfavorito@gmail.com</p>
      </div>
      <div className="col-md-4">
        <h4>Síguenos en redes sociales</h4>
        <ul className="social-icons">
          <li><a href="#"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    )

}