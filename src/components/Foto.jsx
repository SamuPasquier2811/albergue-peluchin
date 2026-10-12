import Pata from './Pata'

export default function Foto({ src, alt, className = '', eager = false, style }) {
    return (
        <div className={`foto ${className}`} style={style}>
        <Pata className="foto__pata" />
        <img
            src={src}
            alt={alt}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            draggable="false"
            onError={(e) => { e.currentTarget.hidden = true }}
        />
        </div>
    )
}