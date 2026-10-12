import PawButton from './PawButton'
import Foto from './Foto'

export default function Visitanos() {
    return (
        <section id="visitanos" className="visita sec">
        <div className="wrap visita__grid">
            <div>
            <h2 className="titulo rv">Visítanos</h2>
            <ul className="datos rv">
                <li>
                <b>Dirección</b>
                <span>Calle 12 Los Nogales, Curva N.° 3, N.° 488. Zona Bajo Llojeta, La Paz, Bolivia</span>
                </li>
                <li>
                <b>Para adoptar</b>
                <span>Sábados, de 10:00 a 18:00</span>
                </li>
                <li>
                <b>Contacto de WhatsApp</b>
                <a href="https://wa.me/+59179171062">(+591) 79171062</a>
                </li>
                <li>
                <b>Correo</b>
                <a href="mailto:alberguepeluchin17@gmail.com">alberguepeluchin17@gmail.com</a>
                </li>
            </ul>
            <div className="visita__btns rv">
                <PawButton external href="https://www.google.com/maps/search/?api=1&query=Albergue+Peluchin+Bajo+Llojeta+La+Paz+Bolivia">Cómo llegar</PawButton>
                <PawButton external tone="verde" href="https://www.facebook.com/albergueparamascotas/">Síguenos en Facebook</PawButton>
                <PawButton external tone="morado" href="https://www.instagram.com/albergue_peluchin/">Síguenos en Instagram</PawButton>
            </div>
            </div>

            <div className="visita__foto rv">
            <Foto src="/images/visitanos.webp" alt="Entrada del albergue Peluchín" />
            </div>
        </div>
        </section>
    )
}