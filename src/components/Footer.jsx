import Pata from './Pata'

export default function Footer() {
    return (
        <footer className="footer">
        <div className="wrap footer__grid">
            <p className="footer__marca"><Pata /> Albergue Peluchín</p>
            <p>Albergue de mascotas sin fines de lucro. Rescatamos, rehabilitamos y damos en adopción. Adopta y no compres.</p>
        </div>
        <p className="wrap footer__fin">© 2026 Albergue Peluchín. La Paz, Bolivia</p>
        </footer>
    )
}