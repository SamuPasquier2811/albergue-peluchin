import PawButton from './PawButton'
import Pata from './Pata'
import Foto from './Foto'

const HUELLAS = [
    { x: '4%', y: '84%', r: '-70deg' }, { x: '12%', y: '74%', r: '-55deg' }, { x: '22%', y: '80%', r: '-75deg' },
    { x: '31%', y: '70%', r: '-60deg' }, { x: '42%', y: '77%', r: '-80deg' }, { x: '52%', y: '67%', r: '-62deg' },
    { x: '63%', y: '75%', r: '-78deg' }, { x: '73%', y: '66%', r: '-64deg' }, { x: '84%', y: '73%', r: '-80deg' },
]

export default function Hero() {
    return (
        <section id="inicio" className="hero">
        <div className="huellas" aria-hidden="true">
            {HUELLAS.map((h, i) => (
            <Pata key={i} className="huella" style={{ '--x': h.x, '--y': h.y, '--r': h.r, '--i': i }} />
            ))}
        </div>

        <div className="wrap hero__grid">
            <div className="hero__text">
            <p className="hero__kicker">Albergue de mascotas, La Paz, Bolivia</p>
            <h1>
                <span className="line"><span>Dales una</span></span>
                <span className="line"><span>segunda oportunidad.</span></span>
            </h1>
            <p className="hero__lead">
                Somos un albergue sin fines de lucro que rescata, rehabilita y da en adopción a perros y gatos
                abandonados o maltratados. Adopta y no compres.
            </p>
            <div className="hero__btns">
                <PawButton href="#adopta">Quiero adoptar</PawButton>
                <PawButton href="#ayuda" tone="verde">Quiero ayudar</PawButton>
            </div>
            </div>

            <div className="collage">
            <Foto className="c1" src="/images/hero-1.jpg" alt="Perrito del albergue Peluchín" eager />
            <Foto className="c2" src="/images/hero-2.jpg" alt="Perrito rescatado en el albergue Peluchín" eager />
            <Foto className="c3" src="/images/hero-3.jpg" alt="Perrito esperando un hogar en el albergue Peluchín" eager />
            </div>
        </div>
        </section>
    )
}