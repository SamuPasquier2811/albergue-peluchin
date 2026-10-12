import PawButton from './PawButton'

const ITEMS = ['Alimento', 'Arrocillo', 'Verduras', 'Menudencia', 'Carne', 'Leche deslactosada para cachorros', 'Atún para gatos', 'Medicinas']

const ICONOS = {
    tazon: <path d="M3 11h18a9 9 0 0 1-9 9h0a9 9 0 0 1-9-9zm4-5h2v3H7zm4-2h2v5h-2zm4 2h2v3h-2z" />,
    persona: <path d="M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM4 21a8 8 0 0 1 16 0z" />,
    cruz: <path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z" />,
}

const CARDS = [
    { ic: 'tazon', t: 'Dona', d: 'Necesitamos alimentos, medicinas y otros insumos para seguir cuidando a los animales que esperan su oportunidad.' },
    { ic: 'persona', t: 'Sé voluntario', d: 'Puedes ayudar a nuestros animalitos brindando tu tiempo. Tú puedes unirte a nuestro equipo siendo voluntario.' },
    { ic: 'cruz', t: 'Esteriliza', d: 'Promovemos la esterilización de las mascotas para que tengan una mejor calidad de vida.' },
]

export default function Ayuda() {
    return (
        <section id="ayuda" className="ayuda sec">
        <div className="wrap">
            <h2 className="titulo rv">Ayúdanos a ayudar</h2>
            <p className="rv">Cada granito de arena sirve para ayudar a nuestros animalitos desamparados.</p>

            <ul className="ayuda__cards">
            {CARDS.map((c, i) => (
                <li key={c.t} className="acard rv" style={{ '--i': i }}>
                <svg className="acard__ic" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">{ICONOS[c.ic]}</svg>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
                </li>
            ))}
            </ul>

            <div className="dona rv">
            <h3>Algunas cosas que han pedido para los peluditos</h3>
            <ul className="chips">
                {ITEMS.map((x, i) => <li key={x} style={{ '--i': i }}>{x}</li>)}
            </ul>
            <blockquote>
                En mayo de 2026, en plena crisis de desabastecimiento por los bloqueos en La Paz, las raciones del albergue
                se redujeron a un día sí y otro no. Gracias a las donaciones de la población pudieron abastecerse de nuevo.
                <cite>Fuente: Red Uno de Bolivia</cite>
            </blockquote>
            <PawButton external={false} href="https://wa.me/+59179171062">Llámanos para donar o ser voluntario</PawButton>
            </div>
        </div>
        </section>
    )
}