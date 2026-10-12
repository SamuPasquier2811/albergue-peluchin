import { useEffect, useState } from 'react'
import PawButton from './PawButton'
import Pata from './Pata'

const LINKS = [
    ['Qué hacemos', '#hacemos'],
    ['Ayuda', '#ayuda'],
    ['Nuestro camino', '#camino'],
    ['Visítanos', '#visitanos'],
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const close = () => setOpen(false)

    return (
        <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="wrap">
            <a className="nav__logo" href="#inicio" onClick={close}>
            <span className="nav__sello"><Pata /></span>
            <span>Albergue Peluchín</span>
            </a>

            <ul id="menu-nav" className={`nav__links ${open ? 'is-open' : ''}`}>
            {LINKS.map(([t, h]) => (
                <li key={h}><a href={h} onClick={close}>{t}</a></li>
            ))}
            <li className="nav__movil">
                <PawButton small href="#adopta" onClick={close}>Quiero adoptar</PawButton>
            </li>
            </ul>

            <div className="nav__cta">
            <PawButton small href="#adopta">Quiero adoptar</PawButton>
            </div>

            <button className="nav__toggle" aria-expanded={open} aria-controls="menu-nav" onClick={() => setOpen(!open)}>
            {open ? 'Cerrar' : 'Menú'}
            </button>
        </div>
        </header>
    )
}