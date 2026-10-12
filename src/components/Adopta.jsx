import { useState } from 'react'
import PawButton from './PawButton'

const PASOS = [
    {
        t: 'Llámanos',
        d: 'Si quieres adoptar a alguno de nuestros perros o gatos, llámanos y te asesoramos.',
        btn: ['(+591) 79171062', 'https://wa.me/+59179171062'],
    },
    {
        t: 'Visítanos',
        d: 'Pasa por el albergue, en la Calle 12 Los Nogales, zona Bajo Llojeta. Los sábados, de 10:00 a 18:00, recibimos a quienes quieren adoptar.',
        btn: ['Cómo llegar', 'https://www.google.com/maps/search/?api=1&query=Albergue+Peluchin+Bajo+Llojeta+La+Paz+Bolivia', true],
    },
    {
        t: 'Lleva tu C.I.',
        d: 'La persona que será titular del animalito es quien realiza la adopción. Debe presentar su cédula de identidad, original y fotocopia.',
    },
    {
        t: 'Firma el contrato',
        d: 'Se firma el contrato de adopción. Todas las adopciones son presenciales: no enviamos perros ni gatos a ninguna parte.',
    },
]

const INCLUYE = [
    'Revisión veterinaria general',
    'Desparasitación según su edad',
    'Vacunas',
    'Esterilización si es mayor de 6 meses',
]

export default function Adopta() {
    const [i, setI] = useState(0)
    const p = PASOS[i]

    return (
        <section id="adopta" className="adopta sec">
        <div className="wrap">
            <h2 className="titulo rv">Adopta y no compres</h2>
            <p className="rv">Tu nuevo compañero te espera en el albergue. Así es el proceso:</p>

            <div className="adopta__grid">
            <ol className="adopta__pasos rv">
                {PASOS.map((x, n) => (
                <li key={x.t}>
                    <button
                    className={`apaso ${n === i ? 'is-on' : ''} ${n < i ? 'is-hecho' : ''}`}
                    aria-current={n === i ? 'step' : undefined}
                    onClick={() => setI(n)}
                    >
                    <span className="apaso__n">{n + 1}</span>
                    <span>{x.t}</span>
                    </button>
                </li>
                ))}
            </ol>

            <div key={i} className="adopta__card">
                <span className="adopta__num" aria-hidden="true">{i + 1}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                {p.btn && (
                <PawButton small external={!!p.btn[2]} href={p.btn[1]}>{p.btn[0]}</PawButton>
                )}
            </div>
            </div>

            <div className="incluye rv">
            <h3>Quien adopta recibe un animalito sano. Incluye:</h3>
            <ul>
                {INCLUYE.map((x, n) => <li key={x} style={{ '--i': n }}>{x}</li>)}
            </ul>
            </div>
        </div>
        </section>
    )
}