import CountUp from './CountUp'

export default function Cifras() {
    return (
        <section className="cifras sec" aria-label="El albergue en datos">
        <div className="wrap">
            <ul className="cifras__grid">
            <li className="cifra rv">
                <b>+<CountUp to={148}/></b>
                <span>perros y gatos que viven hoy en el albergue</span>
                <small>Dato de mayo de 2026</small>
            </li>
            <li className="cifra rv">
                <b>2 meses a 15 años</b>
                <span>es la edad de los perros que esperan un hogar</span>
                <small>Dato de junio de 2024</small>
            </li>
            <li className="cifra rv">
                <b>Sacrificio cero</b>
                <span>buscamos adoptantes para todos los animales que acogemos</span>
            </li>
            <li className="cifra rv">
                <b>Sin fines de lucro</b>
                <span>los animales se cuidan gracias al esfuerzo de voluntarios y a las donaciones</span>
            </li>
            </ul>
        </div>
        </section>
    )
}