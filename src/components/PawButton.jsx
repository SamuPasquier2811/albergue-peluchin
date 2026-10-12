import { useRef, useState } from 'react'
import Pata from './Pata'

const SENDAS = [
    { x: -44, y: -6, r: -20 },
    { x: -16, y: -30, r: 8 },
    { x: 14, y: -8, r: -6 },
    { x: 42, y: -32, r: 18 },
]

export default function PawButton({ href, children, external = false, small = false, tone = 'naranja', onClick }) {
    const [pop, setPop] = useState(false)
    const timer = useRef(0)

    const handleClick = (e) => {
        onClick?.(e)
        setPop(false)
        requestAnimationFrame(() => setPop(true))
        clearTimeout(timer.current)
        timer.current = setTimeout(() => setPop(false), 1200)

        const sinPausa =
        external || e.metaKey || e.ctrlKey || e.shiftKey ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (sinPausa) return

        // Pequeña pausa para ver la animación antes de ir al destino
        e.preventDefault()
        setTimeout(() => { window.location.href = href }, 550)
    }

    return (
        <a
        className={`pawbtn pawbtn--${tone} ${small ? 'pawbtn--sm' : ''} ${pop ? 'is-pop' : ''}`}
        href={href}
        onClick={handleClick}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
        <span className="pawbtn__huellas" aria-hidden="true">
            {SENDAS.map((p, i) => (
            <Pata key={i} className="huella-pop" style={{ '--x': `${p.x}px`, '--y': `${p.y}px`, '--r': `${p.r}deg`, '--n': i }} />
            ))}
        </span>
        <span className="pawbtn__body">
            <Pata className="pawbtn__icon" />
            <span>{children}</span>
        </span>
        </a>
    )
}