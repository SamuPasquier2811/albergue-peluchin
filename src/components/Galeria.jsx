import { useRef } from 'react'
import Foto from './Foto'

const FOTOS = Array.from({ length: 8 }, (_, i) => ({ n: i + 1, r: [-3, 2, -2, 3][i % 4] }))

export default function Galeria() {
    const pista = useRef(null)
    const barra = useRef(null)

    const onScroll = () => {
        const el = pista.current
        const max = el.scrollWidth - el.clientWidth
        barra.current.style.setProperty('--p', max > 0 ? (el.scrollLeft / max).toFixed(3) : 0)
    }
    const mover = (dir) => {
        const el = pista.current
        el.scrollBy({ left: dir * Math.min(320, el.clientWidth * 0.8), behavior: 'smooth' })
    }

    return (
        <section id="galeria" className="galeria sec">
        <div className="wrap">
            <h2 className="titulo rv">Conoce a los peluditos</h2>
            <p className="rv">Perros y gatos rescatados que esperan un hogar. Desliza para verlos.</p>
        </div>

        <ul className="gal__pista" ref={pista} onScroll={onScroll} tabIndex={0} aria-label="Galería de fotos">
            {FOTOS.map((f) => (
            <li key={f.n} className="polaroid" style={{ '--r': `${f.r}deg` }}>
                <Foto src={`/images/galeria-${f.n}.jpg`} alt="Perrito del albergue Peluchín" />
            </li>
            ))}
        </ul>

        <div className="wrap gal__ctrl">
            <div className="gal__barra" ref={barra}><i /></div>
            <button className="flecha flecha--prev" aria-label="Anterior" onClick={() => mover(-1)} />
            <button className="flecha flecha--next" aria-label="Siguiente" onClick={() => mover(1)} />
        </div>
        </section>
    )
}