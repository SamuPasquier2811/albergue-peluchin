const HITOS = [
    {
        f: 'Enero de 2024', t: 'Siete años rescatando',
        d: 'El albergue llevaba 7 años acogiendo animalitos de la calle y tenía 102 perros y 27 gatos rescatados que buscaban un hogar.',
    },
    {
        f: 'Mayo de 2024', t: 'Una zona difícil',
        d: 'Los deslizamientos y las lluvias afectaron el terreno y los muros. El 30 de mayo, el Ministerio de Gobierno inició la reconstrucción y refacción del albergue y entregó casitas para perros y alimento balanceado.',
    },
    {
        f: 'Junio de 2024', t: 'Volver a levantarse',
        d: 'Un incendio consumió parte de la infraestructura y del alimento almacenado. Los voluntarios activaron una campaña para recaudar fondos para la reconstrucción y la compra de medicinas.',
    },
    {
        f: '2024', t: 'Más espacio para los peluditos',
        d: 'Se rehabilitaron los espacios afectados y se construyó una parte del muro perimetral. Los voluntarios siguieron con el muro que faltaba y con nuevos caniles para mejorar la estadía de las mascotas.',
    },
    {
        f: 'Mayo de 2026', t: 'La solidaridad responde',
        d: 'Durante la crisis de desabastecimiento por los bloqueos, las donaciones permitieron reponer verduras, carne, leche deslactosada para cachorros y atún para gatos para más de 148 perros y gatos.',
    },
]

export default function Camino() {
    return (
        <section id="camino" className="camino sec">
        <div className="wrap">
            <h2 className="titulo rv">Nuestro camino reciente</h2>
            <p className="rv">Lo que cuentan las noticias sobre el albergue en los últimos años.</p>

            <ol className="linea">
            {HITOS.map((h) => (
                <li key={h.f + h.t} className="hito rv">
                <span className="hito__fecha">{h.f}</span>
                <h3>{h.t}</h3>
                <p>{h.d}</p>
                </li>
            ))}
            </ol>
        </div>
        </section>
    )
}