import Foto from './Foto'

const PASOS = [
    {
        n: 1, t: 'Rescatamos', img: '/images/rescate.jpg', alt: 'Perrito rescatado',
        d: 'Acogemos a perros y gatos abandonados o maltratados, en especial a hembras en celo, preñadas o con sus cachorros.',
    },
    {
        n: 2, t: 'Rehabilitamos', img: '/images/rehabilitacion.jpg', alt: 'Perrito recuperándose en el albergue',
        d: 'Todos los animalitos que llegan pasan por una revisión veterinaria general y una desparasitación según su edad.',
    },
    {
        n: 3, t: 'Damos en adopción', img: '/images/adopcion.jpg', alt: 'Perrito listo para ser adoptado',
        d: 'Buscamos adoptantes para todos los animales que acogemos. Practicamos el sacrificio cero.',
    },
]

export default function Hacemos() {
    return (
        <section id="hacemos" className="hacemos sec">
        <div className="wrap">
            <h2 className="titulo rv">Qué hacemos</h2>
            <p className="rv">Día a día, el albergue se dedica a tres cosas.</p>

            <ol className="pasos">
            {PASOS.map((p, i) => (
                <li key={p.n} className="paso rv" style={{ '--i': i }}>
                <Foto src={p.img} alt={p.alt} />
                <span className="paso__n" aria-hidden="true">{p.n}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                </li>
            ))}
            </ol>
        </div>
        </section>
    )
}